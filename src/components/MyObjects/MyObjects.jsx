import React, { Suspense } from "react";
import axios from "axios";

import { CardObject } from 'components/CardObject';
import { Linear } from 'components/Linear';
import { defer, useLoaderData, Await } from "react-router-dom";

export const MyObjects = () => {
  const { objects } = useLoaderData();
  return (
    <div className="container">
      <Suspense fallback={<Linear/>}>
        <Await resolve={objects}>
          {
            (resolvedObjects) => (
              <>
                {
                  resolvedObjects.map((card) =>
                    <CardObject card={card} key={card.UID} />
                  )
                }
              </>
            )
          }
        </Await>
      </Suspense>
    </div>
  )
}

const getObject = async () => {
  const res = await axios.get('https://catfact.ninja/fact');
  return [
    {
      UID: 123,
      photo: "https://screenmusings.org/movie/blu-ray/Avatar/images/Avatar-1554.jpg",
      type: 'Квартира',
      address: 'Красный проспект 184',
      date: '12-12-2022',
      price: '1200',
      trand: '1000',
      links: [
        {
          logo: '',
          url: 'http://google.com'
        },
        {
          logo: '',
          url: 'http://google.com'
        },
      ]
    }
  ]
}

export const objectsLoader = async () => {
  return defer({
    objects: getObject()
  })
}