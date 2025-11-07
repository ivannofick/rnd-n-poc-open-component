// // import { Server } from 'oc-server';

// // const userDatabase = [
// //   { name: 'John Doe', born: 1986, hobbies: ['Swimming', 'Basketball'] },
// //   { name: 'Jane Doe', born: 1991, hobbies: ['Running', 'Rugby'] },
// // ];

// // const yearsFunFactDatabase: Record<number, string> = {
// //   1986: "Halley's Comet made its closest approach to Earth in 1986, visible to the naked eye.",
// //   1987: 'The first Final Fantasy game was released in 1987.',
// //   1991: 'The first web page was created in 1991 by Tim Berners-Lee.',
// // };

// // async function getUser(userId: number) {
// //   if (userId < 0 || userId >= userDatabase.length) {
// //     throw new Error(`User with ID ${userId} not found`);
// //   }
// //   return userDatabase[userId];
// // }

// // async function getFunFact(year: number) {
// //   return yearsFunFactDatabase[year] || `No fun fact available for year ${year}`;
// // }

// // const getPillar = async () => {
// //   try {
// //     const res = await fetch(`https://hera.mncplus.id/homepage/api/v1/menu/pillar`, {
// //       headers: {
// //         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2aWQiOjcyNzQsInBsIjoibXdlYiIsImRldmljZV9pZCI6Im13ZWItZTVjMjlhNmUtYjk3OC00YjNkLWJiMzgtMjA2ZjViNTg5YjZjLWp4R2NyIiwibHR5cGUiOiJlbWFpbCIsImp0aSI6IjViMzk4ODFiLWVjMTQtNGUzMi1iZWI5LTM0MTNmMWRmNTRkNCIsImlhdCI6MTc2MjE2MTY3MH0.nJGbTNsXS13h7zuodqC4iIgfjSyt6fbm-r-9hxzcyNI`,
// //         apikey: `Tpa0pF9gLU989TKBslyWvhS6ghWXVm0V`,
// //       },
// //     });

// //     if (!res.ok) {
// //       throw new Error(`HTTP error! status: ${res.status}`);
// //     }

// //     const data = await res.json();

// //     // console.log('cek data pillar', data);
// //     const pilarData = data.data;
// //     const imagePath = data.meta.image_path;

// //     const eventName = (pilar) => {
// //       if (pilar === "ALL") {
// //         return "home_menu_button_clicked";
// //       } else if (pilar === "AUDIO+") {
// //         return "radio_menu_button_clicked";
// //       } else if (pilar === "Video+") {
// //         return "video_button_menu_clicked";
// //       } else {
// //         return `${pilar.toLowerCase().replace("+", "")}_menu_button_clicked`;
// //       }
// //     };

// //     const newPilarData = pilarData.map((item: any) => ({
// //       href: item.link,
// //       isActive: "news",
// //       imgAlt: item.name,
// //       target: "_self",
// //       imgSrcActive: `${imagePath}500/${item.color_image}`,
// //       imgSrcNonActive: `${imagePath}500/${item.grayscale_image}`,
// //       isHome: item.name === "ALL",
// //       event_name: eventName(item.name),
// //       label: item.name,
// //       trackerName: item.tracker_name,
// //       section_id: item.section_id,
// //     }));

// //     return data;
// //   } catch (error) {
// //     console.error("Error fetching pillar:", error);
// //     return "Pillar";
// //   }
// // };


// // // Export the server instance - this is required for OC
// // export const server = new Server({
// //   development: {
// //     // Enable console logs from browser to server for debugging
// //     console: true,
// //   },
// // })
// //   //Define URL parameters that can be passed to your component
// //   // .withParameters({
// //   //   userId: {
// //   //     default: 1,
// //   //     description: 'The user id from the user database',
// //   //     example: 1,
// //   //     mandatory: true,
// //   //     type: 'number',
// //   //   },
// //   // })
// //   // Main handler - returns initial data for component rendering
// //   // This runs when the component is first loaded
// //   .handler(async (params, ctx) => {
// //     // const { userId } = params;
// //     // const user = await getUser(userId);
// //     // const [firstName, lastName] = user.name.split(/\s+/);


// //     const pillarData = await getPillar()
    
// //     // if (firstName === 'Invalid') {
// //     //   // Return undefined to prevent rendering
// //     //   return;
// //     // }

// //     // Set cache headers when same params produce same result
// //     // This improves performance by reducing server load
// //     // Don't cache in local environment because we might get render mismatches
// //     // if (ctx.env.name !== 'local') {
// //     //   ctx.setHeader('Cache-Control', 'max-age=300'); // Cache for 5 minutes
// //     // }

// //     console.log('cek pillarData', pillarData?.data);

// //     // Return data that will be passed as props to React component
// //     return {
// //       data: pillarData?.data
// //     };
// //   })
// //   // Actions are server endpoints that the client can call
// //   // Use these for user interactions, form submissions, etc.
// //   // .action('funFact', async (params: { year: number }) => {
// //   //   const { year } = params;
// //   //   const funFact = await getFunFact(year);
// //   //   return {
// //   //     funFact,
// //   //   };
// //   // });

// // // This enables automatic type inference between server and client
// // declare module 'oc-server' {
// //   interface Register {
// //     server: typeof server;
// //   }
// // }


// import { Server } from 'oc-server';

// const getPillar = async () => {
//   try {
//     const res = await fetch(`https://hera.mncplus.id/homepage/api/v1/menu/pillar`, {
//       headers: {
//         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2aWQiOjcyNzQsInBsIjoibXdlYiIsImRldmljZV9pZCI6Im13ZWItZTVjMjlhNmUtYjk3OC00YjNkLWJiMzgtMjA2ZjViNTg5YjZjLWp4R2NyIiwibHR5cGUiOiJlbWFpbCIsImp0aSI6IjViMzk4ODFiLWVjMTQtNGUzMi1iZWI5LTM0MTNmMWRmNTRkNCIsImlhdCI6MTc2MjE2MTY3MH0.nJGbTNsXS13h7zuodqC4iIgfjSyt6fbm-r-9hxzcyNI`,
//         apikey: `Tpa0pF9gLU989TKBslyWvhS6ghWXVm0V`,
//       },
//     });

//     if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
//     const data = await res.json();

//     const pilarData = data.data;
//     const imagePath = data.meta.image_path;

//     const eventName = (pilar: string) => {
//       if (pilar === 'ALL') return 'home_menu_button_clicked';
//       if (pilar === 'AUDIO+') return 'radio_menu_button_clicked';
//       if (pilar === 'Video+') return 'video_button_menu_clicked';
//       return `${pilar.toLowerCase().replace('+', '')}_menu_button_clicked`;
//     };

//     const formattedData = pilarData.map((item: any) => ({
//       href: item.link,
//       imgAlt: item.name,
//       imgSrcActive: `${imagePath}500/${item.color_image}`,
//       imgSrcNonActive: `${imagePath}500/${item.grayscale_image}`,
//       label: item.name,
//       event_name: eventName(item.name),
//       section_id: item.section_id,
//     }));

//     return formattedData;
//   } catch (error) {
//     console.error('Error fetching pillar:', error);
//     return [];
//   }
// };

// export const server = new Server({})
//   .handler(async () => {
//     const pillars = await getPillar();
//     return { pillars };
//   });

// declare module 'oc-server' {
//   interface Register {
//     server: typeof server;
//   }
// }

import { Server } from 'oc-server';

const getPillar = async () => {
  try {
    const res = await fetch(`https://hera.mncplus.id/homepage/api/v1/menu/pillar`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2aWQiOjcyNzQsInBsIjoibXdlYiIsImRldmljZV9pZCI6Im13ZWItZTVjMjlhNmUtYjk3OC00YjNkLWJiMzgtMjA2ZjViNTg5YjZjLWp4R2NyIiwibHR5cGUiOiJlbWFpbCIsImp0aSI6IjViMzk4ODFiLWVjMTQtNGUzMi1iZWI5LTM0MTNmMWRmNTRkNCIsImlhdCI6MTc2MjE2MTY3MH0.nJGbTNsXS13h7zuodqC4iIgfjSyt6fbm-r-9hxzcyNI`,
        apikey: `Tpa0pF9gLU989TKBslyWvhS6ghWXVm0V`,
      },
    });

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const data = await res.json();
    const pilarData = data.data;
    const imagePath = data.meta.image_path;

    const formatted = pilarData.map((item: any) => ({
      href: item.link,
      name: item.name,
      label: item.name.toLowerCase(),
      imgSrcActive: `${imagePath}500/${item.color_image}`,
      imgSrcNonActive: `${imagePath}500/${item.grayscale_image}`,
    }));

    return formatted;
  } catch (err) {
    console.error('Error fetching pillars:', err);
    return [];
  }
};

export const server = new Server({})
  .handler(async () => {
    const pillars = await getPillar();
    return { pillars };
  });

declare module 'oc-server' {
  interface Register {
    server: typeof server;
  }
}
