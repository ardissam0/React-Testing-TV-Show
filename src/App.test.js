import React from 'react';
import {render, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import {fetchShow as mockFetchShow} from './api/fetchShow';

jest.mock('./api/fetchShow');

const showData = {
    data: [
    {
      id: 553946,
      url:
        'http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers',
      name: 'Chapter One: The Vanishing of Will Byers',
      season: 1,
      number: 1,
      airdate: '2016-07-15',
      airtime: '',
      airstamp: '2016-07-15T12:00:00+00:00',
      runtime: 60,
      image: {
        medium:
          'http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg',
        original:
          'http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg'
      },
      summary:
        "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
      _links: { self: { href: 'http://api.tvmaze.com/episodes/553946' } }
    }
  ]
};

test("clicking on the button fetches data and renders it to the DOM", async () => {
    mockFetchShow.mockResolvedValueOnce(showData);
   
    const { getByText, queryAllByRole } = render(<App />);

    await waitFor(() => {});
    expect(mockFetchShow).toHaveBeenCalledTimes(1);
  
    userEvent.click(getByText(/select a season/i));
  
    // can also do other assertions out here. Await means this code won't run until the promise resolves
    const options = queryAllByRole(/option/i);
    expect(options).toHaveLength(1);
    expect(options[0]).toHaveTextContent("Season 1");
  });


