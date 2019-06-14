let _ = require("lodash");

const PUF_FetchMore = (route, prev, fetchMoreResult) => {
  if (!fetchMoreResult) {
    return prev;
  }
  // Divide the string to generate new data with Object Assign
  let routeItems = route.split(".");
  const originalRouteItem = routeItems.length;
  let Results = {};
  for (let i = routeItems.length; i >= 0; i--) {
    let result_items = routeItems.join(".");
    let currentRouteData = _.get(prev, result_items, {});
    const newResultsRouteData = _.get(fetchMoreResult, result_items, {});
    let previousRouteData;
    // console.log(currentRouteData, newResultsRouteData);
    if (originalRouteItem === i) {
      const newData = [...currentRouteData, ...newResultsRouteData];
      //   console.log("CURRENT ROUTE DATA:++++++++++", currentRouteData);
      //   console.log("NEW DATA: +++++++++++ ", newData);
      newResults = Object.assign({}, { data: newData });
      console.log("NEW RESULT ---- - ---- - - ", newResults);
      Results = Object.assign({}, newResults);
      console.log("RESULT 1 ****************", Results);
    }
    if (originalRouteItem - 1 === i) {
      Results = Object.assign({}, currentRouteData, previousRouteData);
      console.log("RESULT 2 ****************", Results);
      console.log("PREVIOUS ****************", previousRouteData);
    }
    if (originalRouteItem - 2 <= i) {
      Results = Object.assign({}, currentRouteData, previousRouteData);
      console.log("RESULT 3 ****************", Results);
      console.log("PREVIOUS ****************", previousRouteData);
    }

    previousRouteData = currentRouteData;
    result_items = "";
    routeItems.pop();
  }

  return Results;
};

var route = "data.feed.base";
var prev = {
  data: {
    feed: {
      base: [
        {
          __typename: "Post",
          post_id: "11473",
          title: null,
          text: null,
          liked: false,
          likes_count: 0,
          comments_count: 0,
          image: null,
          created_at: "2019-03-22 13:24:11",
          publisher: {
            __typename: "CarClub",
            name: "Club 3 priv ",
            car_club_id: "5"
          },
          resource: {
            __typename: "Event",
            name: "Hola Amigos",
            default_image:
              "https://elasticbeanstalk-us-west-2-454948944021.s3.us-west-2.amazonaws.com/local/carClub/5/event/1377/uSn2Pk750iJDGSeyFrjcVpxboyo4DhHe60Lj0kG0.jpeg",
            official: false,
            public: false,
            unlimited_spots: false,
            spots: 3,
            available_spots: 3,
            start_time: "2019-03-22 13:00:00",
            cost: 0,
            requires_payment: false,
            address: "Ffijfijioff",
            active: true,
            active_reservations_count: null
          }
        },
        {
          __typename: "Post",
          post_id: "11472",
          title: null,
          text: null,
          liked: false,
          likes_count: 0,
          comments_count: 0,
          image: null,
          created_at: "2019-03-22 13:11:52",
          publisher: {
            __typename: "CarClub",
            name: "Club 3 priv ",
            car_club_id: "5"
          },
          resource: {
            __typename: "Event",
            name: "Ddrrr",
            default_image:
              "https://elasticbeanstalk-us-west-2-454948944021.s3.us-west-2.amazonaws.com/local/carClub/5/event/1376/ZBj5A0SCwffe1hhBA3sTxz4lelAZvqGlVBMH9oPl.jpeg",
            official: false,
            public: false,
            unlimited_spots: false,
            spots: 2,
            available_spots: 2,
            start_time: "2019-03-22 13:00:00",
            cost: 5,
            requires_payment: false,
            address: "Zzcxcxzcx",
            active: true,
            active_reservations_count: null
          }
        }
      ],
      code: 200,
      msg: "Success",
      next_page_url:
        "http://localhost:8000/api/driver/1/feed?before=11489&allPublic=1&page=3",
      __typename: "PaginatedConnection"
    }
  }
};

var fetchMoreResult = {
  data: {
    feed: {
      base: [
        {
          __typename: "Post",
          post_id: "11489",
          title: "Is attending an event",
          text: null,
          liked: true,
          likes_count: 1,
          comments_count: 4,
          image: null,
          created_at: "2019-05-22 17:08:52",
          publisher: {
            __typename: "Driver",
            default_image:
              "https://elasticbeanstalk-us-west-2-454948944021.s3.us-west-2.amazonaws.com/local/driver/2/O3SR8I0qVRU3cg0V388SxvQA20RLWsT5wUmCwYRV.jpeg",
            username: "Roku",
            verified: true,
            driver_id: "2"
          },
          resource: {
            __typename: "Event",
            name: "PUF Official ...",
            default_image:
              "https://elasticbeanstalk-us-west-2-454948944021.s3.us-west-2.amazonaws.com/local/carClub/3/event/1382/JTFowfJhd0Gd8PwUIPGlL14NnkaFpjGYmXWN0KiL.jpeg",
            official: false,
            public: true,
            unlimited_spots: false,
            spots: 49,
            available_spots: 48,
            start_time: "2019-06-01 14:45:00",
            cost: 907,
            requires_payment: false,
            address: "Address 9211 Shoreview Rd, Dallas, TX 75238",
            active: true,
            active_reservations_count: null
          }
        },
        {
          __typename: "Post",
          post_id: "11488",
          title: "Joined a new Club!",
          text: null,
          liked: true,
          likes_count: 2,
          comments_count: 1,
          image: null,
          created_at: "2019-05-22 17:08:11",
          publisher: {
            __typename: "Driver",
            default_image:
              "https://elasticbeanstalk-us-west-2-454948944021.s3.us-west-2.amazonaws.com/local/driver/2/O3SR8I0qVRU3cg0V388SxvQA20RLWsT5wUmCwYRV.jpeg",
            username: "Roku",
            verified: true,
            driver_id: "2"
          },
          resource: {
            __typename: "CarClub",
            car_club_id: "4",
            default_image:
              "https://elasticbeanstalk-us-west-2-454948944021.s3.us-west-2.amazonaws.com/local/carClub/4/ppjhXgnacJzJoXC4N0lfTPDuZKJLgdtNg65kyzyY.jpeg",
            name: "Club 2",
            public: true,
            active: true,
            members_count: 1
          }
        }
      ],
      code: 200,
      msg: "Success",
      next_page_url:
        "http://localhost:8000/api/driver/1/feed?before=11489&allPublic=1&page=2",
      __typename: "PaginatedConnection"
    }
  }
};

let result = PUF_FetchMore(route, prev, fetchMoreResult);
console.log(result);
// console.log(result.feed.base);
