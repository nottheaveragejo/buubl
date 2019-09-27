import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput,FlatList,
  ActivityIndicator,
  AppRegistry } from 'react-native';
import MapView, { Marker} from 'react-native-maps';
import Test from "./Test"

const boba = [
  {
  formatted_address: "49 Bayard St, New York, NY 10013, USA",
  geometry: {
  location: {
  lat: 40.715193,
  lng: -73.9974917
  },
  viewport: {
  northeast: {
  lat: 40.71657637989272,
  lng: -73.99612187010727
  },
  southwest: {
  lat: 40.71387672010727,
  lng: -73.99882152989272
  }
  }
  },
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
  id: "8d322d4177bf1dfe8afe4b9258082186a385fb96",
  name: "Vivi Bubble Tea",
  opening_hours: {
  open_now: false
  },
  photos: [
  {
  height: 5312,
  html_attributions: [
  <a href="https://maps.google.com/maps/contrib/106329100023712436373/photos">Linh Profe [Ta]</a>
  ],
  photo_reference: "CmRaAAAAehac9bSdMRmg8uh7CotOSQ_l705mrqv7N0e-CslcbCLrJtyfMXLCwzmXfjZMJxSIBWcEE7r-MvZ_Oa9xhHzphC3u3Nks62qHk72H3gT1IWO7KO6TCKlyhtAIWgnMvaENEhCH9ukkpo8dy6dg5i4IPmYJGhSkvuc2mZ2aDS2v3uw6m-S3EBwgow",
  width: 2988
  }
  ],
  place_id: "ChIJj7EjVSZawokRK8iYc3EFGew",
  plus_code: {
  compound_code: "P283+32 New York",
  global_code: "87G8P283+32"
  },
  price_level: 1,
  rating: 4.2,
  reference: "ChIJj7EjVSZawokRK8iYc3EFGew",
  types: [
  "cafe",
  "food",
  "point_of_interest",
  "establishment"
  ],
  user_ratings_total: 272
  },
  {
  formatted_address: "23 Clinton St, New York, NY 10002, USA",
  geometry: {
  location: {
  lat: 40.7205889,
  lng: -73.98452309999999
  },
  viewport: {
  northeast: {
  lat: 40.72193877989272,
  lng: -73.98306482010726
  },
  southwest: {
  lat: 40.71923912010728,
  lng: -73.98576447989271
  }
  }
  },
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
  id: "8648e6428f4a2b51c9c91703ccda80c470226cdc",
  name: "Boba Guys",
  opening_hours: {
  open_now: false
  },
  photos: [
  {
  height: 2592,
  html_attributions: [
  <a href="https://maps.google.com/maps/contrib/111514876659997758230/photos">Desmond Chow</a>
  ],
  photo_reference: "CmRaAAAAEB4VkTruf7qaj9mEFdMiDFhWkZgkCqOg7UtempV7hLB6j6qhZl3xnaaa1LfN9Vcz8I8O9pR1LXEt2GPEFPbiImUHbLkNY-aNipb3hnyB_jsKOD05u4XQeW2LzMn08P96EhCDk_xzOXOB1OKgjwsIwj7uGhSjgQv_4Sj0OQpieNo33C4gA-fMKA",
  width: 1944
  }
  ],
  place_id: "ChIJRWHFioFZwokRWMH-n1aPI2A",
  plus_code: {
  compound_code: "P2C8+65 New York",
  global_code: "87G8P2C8+65"
  },
  price_level: 1,
  rating: 4.5,
  reference: "ChIJRWHFioFZwokRWMH-n1aPI2A",
  types: [
  "cafe",
  "food",
  "point_of_interest",
  "establishment"
  ],
  user_ratings_total: 358
  },
  {
  formatted_address: "85 Kenmare Street store #2, New York, NY 10012, United States",
  geometry: {
  location: {
  lat: 40.721432,
  lng: -73.9968572
  },
  viewport: {
  northeast: {
  lat: 40.72271682989273,
  lng: -73.99554707010728
  },
  southwest: {
  lat: 40.72001717010728,
  lng: -73.99824672989273
  }
  }
  },
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
  id: "233d6855d2f846d76186313b0cbc83a38f5c0cf0",
  name: "Bar Pa Tea",
  opening_hours: {
  open_now: false
  },
  photos: [
  {
  height: 4032,
  html_attributions: [
  <a href="https://maps.google.com/maps/contrib/106841561709791826198/photos">Wendy Poon</a>
  ],
  photo_reference: "CmRaAAAAeY9Rjj1DgLoEACWIyA62yGWpT8Mx58OcAHOqNJPnl2YEBFhmPYDs7Kgux7ujaC5Un8LRCdPqHA85z9ehMVZlKbf3SwaAge8OvPtYrpoQkJPOOh2OxrhHVGUl3MpASvtgEhD534IRdk3awZUR9ixaMiW4GhTe20xNOkV2bR8K-PArliJs-_DAZw",
  width: 3024
  }
  ],
  place_id: "ChIJn52vw4hZwokRWARF37V69tk",
  plus_code: {
  compound_code: "P2C3+H7 New York",
  global_code: "87G8P2C3+H7"
  },
  rating: 4.4,
  reference: "ChIJn52vw4hZwokRWARF37V69tk",
  types: [
  "cafe",
  "food",
  "point_of_interest",
  "store",
  "establishment"
  ],
  user_ratings_total: 417
  },
  {
  formatted_address: "227 E 14th St, New York, NY 10003, USA",
  geometry: {
  location: {
  lat: 40.733038,
  lng: -73.985903
  },
  viewport: {
  northeast: {
  lat: 40.73427967989272,
  lng: -73.98463237010728
  },
  southwest: {
  lat: 40.73158002010728,
  lng: -73.98733202989273
  }
  }
  },
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
  id: "04005c058e7fb578ef8d8247d1b71361ee0dfffa",
  name: "PaTea",
  opening_hours: {
  open_now: false
  },
  photos: [
  {
  height: 4032,
  html_attributions: [
  <a href="https://maps.google.com/maps/contrib/104320406984800398708/photos">Irina Makagon</a>
  ],
  photo_reference: "CmRaAAAAwD4igx0h4gwwLa_7urHYIjmqLKYviCh5iCKK06-oRaiIQKQRoMouP9P9zGnSLisA9uo1pwJnNoivenNf4jJU7FC5PJw2f9FA95717JjcVYXqPt3U9iGVKqsNR1pyLkAwEhAjdASCm5NdDH_PIJ6N1W7-GhRrtlpZuc2rD_x7nzQQBgHnF7uqNQ",
  width: 3024
  }
  ],
  place_id: "ChIJ0-vyVZ5ZwokR2ocg6RghzvM",
  plus_code: {
  compound_code: "P2M7+6J New York",
  global_code: "87G8P2M7+6J"
  },
  price_level: 1,
  rating: 4.5,
  reference: "ChIJ0-vyVZ5ZwokR2ocg6RghzvM",
  types: [
  "cafe",
  "food",
  "point_of_interest",
  "establishment"
  ],
  user_ratings_total: 122
  },
  {
  formatted_address: "75 Mott St, New York, NY 10013, USA",
  geometry: {
  location: {
  lat: 40.7165184,
  lng: -73.9981486
  },
  viewport: {
  northeast: {
  lat: 40.71783992989272,
  lng: -73.99671647010727
  },
  southwest: {
  lat: 40.71514027010728,
  lng: -73.99941612989272
  }
  }
  },
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
  id: "40d77cc9b2149693ce37548200029acd8a859cb2",
  name: "Ten Ren's Tea Time",
  opening_hours: {
  open_now: false
  },
  photos: [
  {
  height: 4032,
  html_attributions: [
  <a href="https://maps.google.com/maps/contrib/105548024880685903354/photos">Roberto Carlos Rejas</a>
  ],
  photo_reference: "CmRaAAAAERL3_r5tKSXCpMSn_nmj6frJq2lyW_A3Z9xy3liH3P0Xa2Mwd6Hi53dy8rIy7ca-HA_rWiZK3sb1ZSr4mvXHB5zmy2Q6itwCyqGT3g67Cn8v3eT-sElbZCjbcO5oTM5aEhCOUNHtutTiTJe8ZukGd8MVGhSaO4BDWtYs4e8IZ8t3WNyxyg32QA",
  width: 3024
  }
  ],
  place_id: "ChIJ4xq8DCdawokRwDbduOf0xQQ",
  plus_code: {
  compound_code: "P282+JP New York",
  global_code: "87G8P282+JP"
  },
  price_level: 1,
  rating: 4.2,
  reference: "ChIJ4xq8DCdawokRwDbduOf0xQQ",
  types: [
  "cafe",
  "restaurant",
  "food",
  "point_of_interest",
  "establishment"
  ],
  user_ratings_total: 334
  },
  {
  formatted_address: "75 W 38th St, New York, NY 10018, USA",
  geometry: {
  location: {
  lat: 40.752285,
  lng: -73.9856491
  },
  viewport: {
  northeast: {
  lat: 40.75360087989272,
  lng: -73.98432422010728
  },
  southwest: {
  lat: 40.75090122010727,
  lng: -73.98702387989273
  }
  }
  },
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
  id: "e3128f1c35a00ebc019b2d5c7bd4866b263f10c6",
  name: "Gong Cha",
  opening_hours: {
  open_now: false
  },
  photos: [
  {
  height: 3000,
  html_attributions: [
  <a href="https://maps.google.com/maps/contrib/106677242771450612279/photos">Fesseha Tsegaye</a>
  ],
  photo_reference: "CmRaAAAA6bXLPazdfFyduTmgNd9p9UnP8rffgqtN5mi1u4o31GKGkruznEPfSGtsNbXfkyeXhfvMLiIJf6xM_KegUIZGV5U__AtxRwnX76d0AkK10i026UJkVrIZC5CidH7SNvPpEhCMLSbSexJDwO0-doovMJqDGhRg7aebIu5LyUjN6qpUFGs7eWXpDw",
  width: 2258
  }
  ],
  place_id: "ChIJYb5NTKpZwokR_Jh_71aRwvY",
  plus_code: {
  compound_code: "Q227+WP New York",
  global_code: "87G8Q227+WP"
  },
  price_level: 1,
  rating: 4.2,
  reference: "ChIJYb5NTKpZwokR_Jh_71aRwvY",
  types: [
  "cafe",
  "food",
  "point_of_interest",
  "establishment"
  ],
  user_ratings_total: 399
  },
  {
  formatted_address: "30 Third Ave, New York, NY 10003, USA",
  geometry: {
  location: {
  lat: 40.7303635,
  lng: -73.9896177
  },
  viewport: {
  northeast: {
  lat: 40.73166487989273,
  lng: -73.98814752010728
  },
  southwest: {
  lat: 40.72896522010728,
  lng: -73.99084717989273
  }
  }
  },
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
  id: "790ddf3ab3a621a76d96dbb4eef902e2794fda60",
  name: "ViVi Bubble Tea",
  opening_hours: {
  open_now: false
  },
  photos: [
  {
  height: 4032,
  html_attributions: [
  <a href="https://maps.google.com/maps/contrib/105671526178142822524/photos">Z. Cai</a>
  ],
  photo_reference: "CmRaAAAAw5Rrl1SclAgDGvb2i9cfwteMIMnnoRqM73Cw8qau0Ls_3bQZ0Zm8gGb22UbXT4umvLpUDUlu5zexZjtLfIrsv6ewLLQCVV8upAHhPEUGwoEyOm4KCyA23laCxlzncnSDEhDT2tbPLGzb_J-OY0LWzsLPGhS1Hb84jiKv4rPpdOZ6kpzJDiFzbQ",
  width: 3024
  }
  ],
  place_id: "ChIJ2e_37ZtZwokRSqkIMI8triU",
  plus_code: {
  compound_code: "P2J6+45 New York",
  global_code: "87G8P2J6+45"
  },
  price_level: 1,
  rating: 4.3,
  reference: "ChIJ2e_37ZtZwokRSqkIMI8triU",
  types: [
  "cafe",
  "food",
  "point_of_interest",
  "establishment"
  ],
  user_ratings_total: 123
  },
  {
  formatted_address: "5924 8th Ave, Brooklyn, NY 11220, USA",
  geometry: {
  location: {
  lat: 40.6356813,
  lng: -74.00967349999999
  },
  viewport: {
  northeast: {
  lat: 40.63697347989272,
  lng: -74.00822747010729
  },
  southwest: {
  lat: 40.63427382010727,
  lng: -74.01092712989272
  }
  }
  },
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
  id: "2213cb5ec2ca4e9b97d614c4b490b065e9f5f3c6",
  name: "ViVi Bubble Tea",
  opening_hours: {
  open_now: true
  },
  photos: [
  {
  height: 3456,
  html_attributions: [
  <a href="https://maps.google.com/maps/contrib/109343075274477885720/photos">Zerlina Lin</a>
  ],
  photo_reference: "CmRaAAAAIs9vYvnIfehAz1q6TreHUewQ15v2CLppYMuZqwUgaVGUIFKCgBiaBjOjww-i5iNOA3jQ9GrfG0vmNQUE7ElUPIObKCRx3LToltqfuRXTnmqSzfzEccum15_INZpl_v44EhCGXPSA4yvnenIfMSP8D1i-GhT-m19C7dO4vi8AGTWOWpaogRPwuQ",
  width: 4608
  }
  ],
  place_id: "ChIJZUFX0ktFwokRV9zu0voYG7c",
  plus_code: {
  compound_code: "JXPR+74 New York",
  global_code: "87G7JXPR+74"
  },
  price_level: 1,
  rating: 3.6,
  reference: "ChIJZUFX0ktFwokRV9zu0voYG7c",
  types: [
  "cafe",
  "food",
  "point_of_interest",
  "establishment"
  ],
  user_ratings_total: 132
  },
  {
  formatted_address: "325 Broadway, New York, NY 10007, USA",
  geometry: {
  location: {
  lat: 40.7160728,
  lng: -74.0048857
  },
  viewport: {
  northeast: {
  lat: 40.71739332989272,
  lng: -74.00347557010728
  },
  southwest: {
  lat: 40.71469367010727,
  lng: -74.00617522989272
  }
  }
  },
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
  id: "4e5377932454c5bd6624ce5928dd829ccd636e2a",
  name: "ViVi Bubble Tea",
  opening_hours: {
  open_now: false
  },
  photos: [
  {
  height: 4032,
  html_attributions: [
  <a href="https://maps.google.com/maps/contrib/111792310417904840408/photos">katerine perez</a>
  ],
  photo_reference: "CmRaAAAAIkxr3TPj-FhmlDZT1HDSc_3OWHCnGAEdK0xrzbWFtPdKq9CrczskLeLDwLesUeEn6Z9mXQHPI8l6w3QHstoGZKyH3JhXkJPOsbiOs9DjPW3Q029LQkunfRfinH6JW7KMEhC2LKWt-6F8DYVWzqmwc317GhTX7k1QCxv_wZEjPGvqE4gwh7TGGQ",
  width: 3024
  }
  ],
  place_id: "ChIJ1VOgyiFawokR1h5Bn-3r2cM",
  plus_code: {
  compound_code: "PX8W+C2 New York",
  global_code: "87G7PX8W+C2"
  },
  price_level: 1,
  rating: 4.2,
  reference: "ChIJ1VOgyiFawokR1h5Bn-3r2cM",
  types: [
  "cafe",
  "food",
  "point_of_interest",
  "establishment"
  ],
  user_ratings_total: 142
  },
  {
  formatted_address: "183 Hester St, New York, NY 10013, USA",
  geometry: {
  location: {
  lat: 40.7181096,
  lng: -73.9974328
  },
  viewport: {
  northeast: {
  lat: 40.71941057989272,
  lng: -73.99611317010728
  },
  southwest: {
  lat: 40.71671092010728,
  lng: -73.99881282989271
  }
  }
  },
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
  id: "39655acc52682e3b4518f1373cdd59945827b8cf",
  name: "ViVi Bubble Tea",
  opening_hours: {
  open_now: false
  },
  photos: [
  {
  height: 5312,
  html_attributions: [
  <a href="https://maps.google.com/maps/contrib/111373577071423140105/photos">Alex L.</a>
  ],
  photo_reference: "CmRaAAAA70B1x_fUQf-6YvfjEhIZyf4YG8PrTZkJZvI8kXeIMTzCIK-X0S-Npvq9bko7usw8rs3LUFsFV8t7OZXACdRAtHPp5ECu6TNnbQU5bCouQk7tVUvyOVTUUoif8zGz6hSWEhBaT718tHxCwXEnH6tnzxjzGhRcyVduq4FMEz6Q0a7Ja6RrLFfBIA",
  width: 2988
  }
  ],
  place_id: "ChIJVWCwLYhZwokRCh46tLy5F68",
  plus_code: {
  compound_code: "P293+62 New York",
  global_code: "87G8P293+62"
  },
  price_level: 1,
  rating: 4.1,
  reference: "ChIJVWCwLYhZwokRCh46tLy5F68",
  types: [
  "cafe",
  "food",
  "point_of_interest",
  "establishment"
  ],
  user_ratings_total: 170
  },
  {
  formatted_address: "28 St Marks Pl, New York, NY 10003, USA",
  geometry: {
  location: {
  lat: 40.7288255,
  lng: -73.9886313
  },
  viewport: {
  northeast: {
  lat: 40.73024667989272,
  lng: -73.98722742010727
  },
  southwest: {
  lat: 40.72754702010727,
  lng: -73.98992707989272
  }
  }
  },
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
  id: "57205f124c7ab767dc1adc6a788a886d20c094d5",
  name: "Kung Fu Tea",
  opening_hours: {
  open_now: false
  },
  photos: [
  {
  height: 3840,
  html_attributions: [
  <a href="https://maps.google.com/maps/contrib/103156794932358964356/photos">Kelly H</a>
  ],
  photo_reference: "CmRaAAAAJg7b352DivJhpzNk1nbuCMcS5LwgxO0lDUDWXcuY1dr1SxE2GninITJfnltoguLVGVhLzvyc89yCpJTbawiXXFFm2ToUNEAfuipjlUHnxp7L7upaO_WxugVh9bAq2f9BEhA1noQS7j25tDsOwpY5VMbtGhRVVDW-gl1lRT6DkXhLAQdyBmGIhQ",
  width: 2160
  }
  ],
  place_id: "ChIJc3IWfpxZwokRqkLx4uUcd8k",
  plus_code: {
  compound_code: "P2H6+GG New York",
  global_code: "87G8P2H6+GG"
  },
  price_level: 1,
  rating: 4.5,
  reference: "ChIJc3IWfpxZwokRqkLx4uUcd8k",
  types: [
  "cafe",
  "restaurant",
  "food",
  "point_of_interest",
  "establishment"
  ],
  user_ratings_total: 153
  },
  {
  formatted_address: "170 W 23rd St, New York, NY 10011, USA",
  geometry: {
  location: {
  lat: 40.743773,
  lng: -73.9954779
  },
  viewport: {
  northeast: {
  lat: 40.74522442989272,
  lng: -73.99405282010727
  },
  southwest: {
  lat: 40.74252477010728,
  lng: -73.9967524798927
  }
  }
  },
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
  id: "791cc945dd6a97593581ecf2860d9d2714ac9bb5",
  name: "ViVi Bubble Tea",
  opening_hours: {
  open_now: false
  },
  photos: [
  {
  height: 4160,
  html_attributions: [
  <a href="https://maps.google.com/maps/contrib/111673956512229022289/photos">April Matt</a>
  ],
  photo_reference: "CmRaAAAAZhq0evNxWvanN7mrdvLrOpUtwOpON91XToPyQgOrCb31aWJtWa28OduPcCcSxj_G7I7JxTm_6Xbb1uCERMuL3jeHWvHwVQNASnMF07phhuW6GvguIVq-ndBP8MU1GyuZEhADSnqTshNCsGdZLqQ_AU6yGhTPNL3o8OujxL4ptvDpL2bqUiki-g",
  width: 2340
  }
  ],
  place_id: "ChIJo_yrMbtZwokR9lQEjjSmngg",
  plus_code: {
  compound_code: "P2V3+GR New York",
  global_code: "87G8P2V3+GR"
  },
  price_level: 1,
  rating: 4.1,
  reference: "ChIJo_yrMbtZwokR9lQEjjSmngg",
  types: [
  "cafe",
  "food",
  "point_of_interest",
  "establishment"
  ],
  user_ratings_total: 287
  },
  {
  formatted_address: "205 Allen St, New York, NY 10002, USA",
  geometry: {
  location: {
  lat: 40.7227506,
  lng: -73.98908229999999
  },
  viewport: {
  northeast: {
  lat: 40.72408022989273,
  lng: -73.98763827010727
  },
  southwest: {
  lat: 40.72138057010728,
  lng: -73.99033792989272
  }
  }
  },
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
  id: "1b150ba655301e8491acee2e210e28a9480a19ac",
  name: "ViVi Bubble Tea",
  opening_hours: {
  open_now: false
  },
  photos: [
  {
  height: 5312,
  html_attributions: [
  <a href="https://maps.google.com/maps/contrib/109693527333477235381/photos">Alex Raftas</a>
  ],
  photo_reference: "CmRaAAAAnz3_Oyn1NOitRERC1tclscHCm8cGFB1fNeMco1B-DQWjcvTDzDvn6NaL-i8OIuKBGxySud_4sKgBfhW1jJlk6wxEiJwQlIydqyEzQHivzppkAHer9OFtjKJ1cD4y3B1jEhBKdYouQtkBFAfXBmPc18-VGhSyiBP_xJ7_ITEL-oLeaLSbQMOZAQ",
  width: 2988
  }
  ],
  place_id: "ChIJkY3kdIRZwokRcRC49aMa-Vk",
  plus_code: {
  compound_code: "P2F6+49 New York",
  global_code: "87G8P2F6+49"
  },
  price_level: 1,
  rating: 4.2,
  reference: "ChIJkY3kdIRZwokRcRC49aMa-Vk",
  types: [
  "cafe",
  "food",
  "point_of_interest",
  "establishment"
  ],
  user_ratings_total: 156
  },
  {
  formatted_address: "60 E 4th St, New York, NY 10003, USA",
  geometry: {
  location: {
  lat: 40.7266257,
  lng: -73.9907049
  },
  viewport: {
  northeast: {
  lat: 40.72801767989272,
  lng: -73.98932377010728
  },
  southwest: {
  lat: 40.72531802010727,
  lng: -73.99202342989271
  }
  }
  },
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
  id: "565a0b8c34aa77e96b0c5a64218759538e5faf52",
  name: "Hello Always Tea",
  opening_hours: {
  open_now: false
  },
  photos: [
  {
  height: 3024,
  html_attributions: [
  <a href="https://maps.google.com/maps/contrib/115432715671414910243/photos">Ayse nisa</a>
  ],
  photo_reference: "CmRaAAAAxCjp2PM0tG8ukt5wfWbg6iif46DADPyXUMnJ2PWLGReKcujgakShoqbWdC8bH7tj-BarFKgjtnxAUvmgPbAmvMsqHhoZLJjHUkXth7WV_-VyxfmFvLUTgXo58Gu_yAvbEhAiFbyU_LJb965xeBRNxSkTGhSDtO4AdQFWO9vqIbzW_yhqMjOUyg",
  width: 4032
  }
  ],
  place_id: "ChIJsUudCCRZwokRuQ3IP1hERZ0",
  plus_code: {
  compound_code: "P2G5+MP New York",
  global_code: "87G8P2G5+MP"
  },
  rating: 4.9,
  reference: "ChIJsUudCCRZwokRuQ3IP1hERZ0",
  types: [
  "cafe",
  "food",
  "point_of_interest",
  "establishment"
  ],
  user_ratings_total: 31
  },
  {
  formatted_address: "11 Waverly Pl, New York, NY 10002, USA",
  geometry: {
  location: {
  lat: 40.7301532,
  lng: -73.99416409999999
  },
  viewport: {
  northeast: {
  lat: 40.73146017989272,
  lng: -73.99285012010728
  },
  southwest: {
  lat: 40.72876052010728,
  lng: -73.99554977989271
  }
  }
  },
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
  id: "e76469d108d3833c380d8396b9a1e19d492d4fa5",
  name: "Boba Guys",
  opening_hours: {
  open_now: false
  },
  photos: [
  {
  height: 4032,
  html_attributions: [
  <a href="https://maps.google.com/maps/contrib/113203519967799627427/photos">Nana Xiao</a>
  ],
  photo_reference: "CmRaAAAAOfR2gVCeRKpOL2GSE2CurwoNWTbasqpV67q4mVdFQRMsRP6Dl1IwAVMbbM73incXRBnOf1jL5jHLq3afOqvBX_dALKKP8a4cJbnm3C78H-6FolZTakSjyb9_O8zuyV9qEhCMy9X6o4sKhvSkazNC2xgKGhQKXPP3cj4bdbbMAAYEj0bHZ0fsdw",
  width: 3024
  }
  ],
  place_id: "ChIJ_9YPcJpZwokRI8eJzfWbZXo",
  plus_code: {
  compound_code: "P2J4+38 New York",
  global_code: "87G8P2J4+38"
  },
  price_level: 1,
  rating: 4.5,
  reference: "ChIJ_9YPcJpZwokRI8eJzfWbZXo",
  types: [
  "cafe",
  "food",
  "point_of_interest",
  "establishment"
  ],
  user_ratings_total: 505
  },
  {
  formatted_address: "51 Chrystie St, New York, NY 10002, USA",
  geometry: {
  location: {
  lat: 40.7162347,
  lng: -73.9949914
  },
  viewport: {
  northeast: {
  lat: 40.71757237989272,
  lng: -73.99359482010729
  },
  southwest: {
  lat: 40.71487272010728,
  lng: -73.99629447989273
  }
  }
  },
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
  id: "c86c9bc16a3f828a9f7f0ac18782d5e0667b4f2b",
  name: "Yaya Tea CHRYSTIE",
  opening_hours: {
  open_now: false
  },
  photos: [
  {
  height: 4032,
  html_attributions: [
  <a href="https://maps.google.com/maps/contrib/115780331533664885179/photos">Justin Lin</a>
  ],
  photo_reference: "CmRaAAAAzDlVAgL_IKyjztstI09WFTPzloo93rY5pOlqWcrkov_ilzzYiU9Pr4JDgF-qyYDReDnj76soHIRL7aAND_ZY4Q0fcv1mfhuoAkTJlStkTNdqsCKkQ8bCe9ECQ4bjGoEwEhDL5I8Qpvatuw8OssfQWtRmGhQXyTQTVdfwftDltEjST1Y0gnTK7g",
  width: 3024
  }
  ],
  place_id: "ChIJE-ly4SdawokRFPAawZIBq1w",
  plus_code: {
  compound_code: "P284+F2 New York",
  global_code: "87G8P284+F2"
  },
  price_level: 1,
  rating: 4.6,
  reference: "ChIJE-ly4SdawokRFPAawZIBq1w",
  types: [
  "grocery_or_supermarket",
  "cafe",
  "restaurant",
  "food",
  "point_of_interest",
  "store",
  "establishment"
  ],
  user_ratings_total: 446
  },
  {
  formatted_address: "234 Canal St #107, New York, NY 10013, USA",
  geometry: {
  location: {
  lat: 40.71772139999999,
  lng: -74.00000519999999
  },
  viewport: {
  northeast: {
  lat: 40.71915817989272,
  lng: -73.99854202010728
  },
  southwest: {
  lat: 40.71645852010727,
  lng: -74.00124167989271
  }
  }
  },
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
  id: "55939f83e670bc26d8e89fbcdbd586930289b61a",
  name: "Kung Fu Tea",
  opening_hours: {
  open_now: false
  },
  photos: [
  {
  height: 4032,
  html_attributions: [
  <a href="https://maps.google.com/maps/contrib/114765186978032455679/photos">Lilly Rodríguez-Malavé</a>
  ],
  photo_reference: "CmRaAAAAyyMKtVnu64_8zxRvpLQGON3gXCI7r0U66HnSRkIrxUrjCLO-utdYmw-zcscxwcCVG4ENl5uYB5sjDRa36NkFncN6X63R1f3QGAhpXwujCL-q09f6V21YbaeshXQUVaLaEhA4ChFMz4wRyNmgp9dWS7coGhS1AluuszJa7nwAqnIDy0zA7uFqYg",
  width: 3024
  }
  ],
  place_id: "ChIJ_QCEVydawokRmYfSKpaSRVA",
  plus_code: {
  compound_code: "PX9X+3X New York",
  global_code: "87G7PX9X+3X"
  },
  price_level: 1,
  rating: 4.1,
  reference: "ChIJ_QCEVydawokRmYfSKpaSRVA",
  types: [
  "cafe",
  "restaurant",
  "food",
  "point_of_interest",
  "establishment"
  ],
  user_ratings_total: 210
  },
  {
  formatted_address: "31 Waverly Pl Unit 5, New York, NY 10003, USA",
  geometry: {
  location: {
  lat: 40.7306862,
  lng: -73.9952857
  },
  viewport: {
  northeast: {
  lat: 40.73200022989272,
  lng: -73.99396727010728
  },
  southwest: {
  lat: 40.72930057010728,
  lng: -73.99666692989271
  }
  }
  },
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
  id: "3f97d76a0da62a0c04fd901b7e0ada75e4b386c9",
  name: "Kung Fu Tea",
  opening_hours: {
  open_now: false
  },
  photos: [
  {
  height: 4048,
  html_attributions: [
  <a href="https://maps.google.com/maps/contrib/112574192669080538377/photos">Suyash Raj</a>
  ],
  photo_reference: "CmRaAAAAXCxGrLUlgI6DxJFjaGyhlmqWpQCb3jBnybRddjIjKuwl3xpMg8MpUWE00-9ZAwjaJCxbUT8iRggdMhF1TSjBfnQfSAiuEppis2wSmaWHmjz9L1wrOYbodSVKaDdVYtiCEhBHVEraOZIZJgG15u9horOGGhQtjJHSGlFMtbgSzjEJKQfFGmfmuw",
  width: 3036
  }
  ],
  place_id: "ChIJL-5amZBZwokRCSb9VqaEYFM",
  plus_code: {
  compound_code: "P2J3+7V New York",
  global_code: "87G8P2J3+7V"
  },
  price_level: 1,
  rating: 4.5,
  reference: "ChIJL-5amZBZwokRCSb9VqaEYFM",
  types: [
  "cafe",
  "restaurant",
  "food",
  "point_of_interest",
  "establishment"
  ],
  user_ratings_total: 87
  },
  {
  formatted_address: "129 E 45th St, New York, NY 10017, USA",
  geometry: {
  location: {
  lat: 40.7533238,
  lng: -73.9743211
  },
  viewport: {
  northeast: {
  lat: 40.75466217989272,
  lng: -73.97304027010728
  },
  southwest: {
  lat: 40.75196252010728,
  lng: -73.97573992989271
  }
  }
  },
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
  id: "1102ef51b797119941cf82fb11fdbb8d88c72359",
  name: "CoCo Fresh Tea & Juice",
  opening_hours: {
  open_now: false
  },
  photos: [
  {
  height: 4032,
  html_attributions: [
  <a href="https://maps.google.com/maps/contrib/114583258099781397167/photos">ぷーあー路</a>
  ],
  photo_reference: "CmRaAAAAXmEPJ4JdJqnzWdDzuUUWiSjo05F3WOB-o9Ee7Ue0caTVsOWF3Q8oCurVonMR6TkCeouwJ6P_4WKNsFKncu7G3_SxUZ6xfGUHwZi8l7YkQdbQZZcV4sM_RU2A_afCXNBUEhDEMFEwvTPRPn14gTQttM0kGhQPrWI06FFE-eahA4-TeFAhmyJycA",
  width: 3024
  }
  ],
  place_id: "ChIJARoGfQJZwokR6biHHGfglOY",
  plus_code: {
  compound_code: "Q23G+87 New York",
  global_code: "87G8Q23G+87"
  },
  price_level: 1,
  rating: 4.2,
  reference: "ChIJARoGfQJZwokR6biHHGfglOY",
  types: [
  "cafe",
  "food",
  "point_of_interest",
  "establishment"
  ],
  user_ratings_total: 291
  },
  {
  formatted_address: "226 E 14th St, New York, NY 10003, USA",
  geometry: {
  location: {
  lat: 40.7325304,
  lng: -73.9860566
  },
  viewport: {
  northeast: {
  lat: 40.73399077989273,
  lng: -73.98462582010727
  },
  southwest: {
  lat: 40.73129112010728,
  lng: -73.98732547989272
  }
  }
  },
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
  id: "ada6975f7440a127077e35d7bb976c216101b828",
  name: "Vivi Bubble Tea",
  opening_hours: {
  open_now: false
  },
  photos: [
  {
  height: 8400,
  html_attributions: [
  <a href="https://maps.google.com/maps/contrib/101252457808101591777/photos">Vivi Bubble Tea</a>
  ],
  photo_reference: "CmRaAAAA-4_sW3hX1e2Mue4VWiiPS_LG6WYNBK6REwIgIxsedfJ6qtbk4ioB4AN1ZOzDYDk7tk759HHXnlGfY7xu5HWI9-l1TtIFY5BwxvACBociBylTgYwDOLBuO6H5KGBZAQarEhDprlkFh1SSFdWeVmYl5dD-GhQB15rtOeSL_yWaanvjFJfN1Ugofw",
  width: 6600
  }
  ],
  place_id: "ChIJ19qa-55ZwokRzg8dKpLbqzU",
  plus_code: {
  compound_code: "P2M7+2H New York",
  global_code: "87G8P2M7+2H"
  },
  price_level: 1,
  rating: 4.4,
  reference: "ChIJ19qa-55ZwokRzg8dKpLbqzU",
  types: [
  "cafe",
  "food",
  "point_of_interest",
  "establishment"
  ],
  user_ratings_total: 161
  }
  ]

  export default class MapsContainer extends Component {
     constructor(props){
       super(props);
       this.state = {
         constraints: [{ name: '', time: 0 }],
         searchResults: [],
         mapsLoaded: false,
         markers: [],
         map: {},
         mapsApi: {},
         nyLatLng: {},
         autoCompleteService: {},
         placesService: {},
         geoCoderService: {},
         directionService: {},
       };
     }
   // Update name for constraint with index === key
   updateConstraintName = ((event, key) => {
    event.preventDefault();
    const prevConstraints = this.state.constraints;
    const constraints = Object.assign([], prevConstraints);
    constraints[key].name = event.target.value;
    this.setState({ constraints });
  });

  // Updates distance (in KM) for constraint with index == key
  updateConstraintTime = ((key, value) => {
    const prevConstraints = this.state.constraints;
    const constraints = Object.assign([], prevConstraints);
    constraints[key].time = value;
    this.setState({ constraints });
  });

  // Adds a Marker to the GoogleMaps component
  addMarker = ((lat, lng, name) => {
    const prevMarkers = this.state.markers;
    const markers = Object.assign([], prevMarkers);

    // If name already exists in marker list just replace lat & lng.
    let newMarker = true;
    for (let i = 0; i < markers.length; i++) {
      if (markers[i].name === name) {
        newMarker = false;
        markers[i].lat = lat;
        markers[i].lng = lng;
        message.success(`Updated "${name}" Marker`);
        break;
      }
    }
    // Name does not exist in marker list. Create new marker
    if (newMarker) {
      markers.push({ lat, lng, name });
      message.success(`Added new "${name}" Marker`);
    }

    this.setState({ markers });
  });

  // Runs once when the Google Maps library is ready
  // Initializes all services that we need
  apiHasLoaded = ((map, mapsApi) => {
    this.setState({
      mapsLoaded: true,
      map,
      mapsApi,
      nyLatLng: new mapsApi.LatLng(nyCOOR.lat, nyCOOR.lng),
      autoCompleteService: new mapsApi.places.AutocompleteService(),
      placesService: new mapsApi.places.PlacesService(map),
      geoCoderService: new mapsApi.Geocoder(),
      directionService: new mapsApi.DirectionsService(),
    });
  });

  // With the constraints, find some places serving ice-cream
  handleSearch = (() => {
    const { markers, constraints, placesService, directionService, mapsApi } = this.state;
    if (markers.length === 0) {
      message.warn('Add a constraint and try again!');
      return;
    }
    const filteredResults = [];
    const marker = markers[0];
    const timeLimit = constraints[0].time;
    const markerLatLng = new mapsApi.LatLng(marker.lat, marker.lng);

    const placesRequest = {
      location: markerLatLng,
      // radius: '30000', // Cannot be used with rankBy. Pick your poison!
      type: ['restaurant', 'cafe'], // List of types: https://developers.google.com/places/supported_types
      query: 'boba tea',
      rankBy: mapsApi.places.RankBy.DISTANCE, // Cannot be used with radius.
    };

    // First, search for shops.
    placesService.textSearch(placesRequest, ((response) => {
      for (let i = 0; i < response.length; i++) {
        const bobaPlace = response[i];
        console.log(bobaPlace)
        const { rating, name } = bobaPlace;
        const address = bobaPlace.formatted_address; // e.g 80 mandai Lake Rd,
        const priceLevel = bobaPlace.price_level; // 1, 2, 3...
        const coorLat = bobaPlace.geometry.viewport.ka.g
        const coorLng = bobaPlace.geometry.viewport.oa.g
        let photoUrl = '';
        let openNow = false;
        if (bobaPlace.opening_hours) {
          openNow = bobaPlace.opening_hours.open_now; // e.g true/false
        }
        if (bobaPlace.photos && bobaPlace.photos.length > 0) {
          photoUrl = bobaPlace.photos[0].getUrl();
        }

        // Second, For each, check if it is within acceptable travelling distance
        const directionRequest = {
          origin: markerLatLng,
          destination: address, // Address ofplace
          travelMode: 'TRANSIT',
        }
        directionService.route(directionRequest, ((result, status) => {
          if (status !== 'OK') { return }
          const travellingRoute = result.routes[0].legs[0]; // { duration: { text: 1mins, value: 600 } }
          const travellingTimeInMinutes = travellingRoute.duration.value / 60;
          if (travellingTimeInMinutes < timeLimit) {
            const distanceText = travellingRoute.distance.text; // 6.4km
            const timeText = travellingRoute.duration.text; // 11 mins
            filteredResults.push({
              name,
              rating,
              address,
              openNow,
              priceLevel,
              photoUrl,
              distanceText,
              timeText,
              coorLat ,
              coorLng
            });
          }
          // Finally, Add results to state
          this.setState({ searchResults: filteredResults });
        }));
      }
    }));
  });
  render(){
    console.log(boba)
    return (
      <View>
      <MapView style={styles.map}
    initialRegion={{
      latitude:  40.728,
      longitude: -73.986,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    showsUserLocation={true}
  >
  {boba.map((el, i)=> (
    <Marker
    key= {el}
    coordinate ={{
      latitude: el.geometry.location.lat,
      longitude:  el.geometry.location.lng
    }}
    title= {el.name}
    description={'testing123'}
  />
  ))}
  <Marker
  coordinate={{
    latitude:  40.728,
    longitude: -73.986}}
    title={"home"}
    description={'testing123'}/>
  </MapView>
  </View>
  );
  }
}


const styles = StyleSheet.create({
 map: {
   height: 500,
   top: 0,
   bottom: 0,
   left: 0,
   right: 0,
 },
 input: {
  height:100,
  width: 200
 }
});
