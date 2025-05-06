interface PartyMember {
  name: string;
  position: string;
  image: string;
  children?: PartyMember[];
}

export const initialData: PartyMember = {
  name: "Mohammad Rafiqul Amin",
  position: "Founder ",
  image: "/images/founder_img.avif",
  children: [
    {
      name: "First Last",
      position: "Designation",
      image: "https://randomuser.me/api/portraits/men/83.jpg",
      children: [
        {
          name: "First Last",
          position: "Designation",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          children: [
            {
              name: "First Last",
              position: "Designation",
              image: "https://randomuser.me/api/portraits/men/76.jpg",
              children: [
                {
                  name: "First Last",
                  position: "Designation",
                  image: "https://randomuser.me/api/portraits/men/55.jpg",
                },
                {
                  name: "First Last",
                  position: "Designation",
                  image: "https://randomuser.me/api/portraits/men/41.jpg",
                },
                {
                  name: "First Last",
                  position: "Designation",
                  image: "https://randomuser.me/api/portraits/men/42.jpg",
                },
              ],
            },
            {
              name: "First Last",
              position: "Designation",
              image: "https://randomuser.me/api/portraits/men/44.jpg",
              children: [
                {
                  name: "First Last",
                  position: "Designation",
                  image: "https://randomuser.me/api/portraits/men/25.jpg",
                  children: [
                    {
                      name: "First Last",
                      position: "Designation",
                      image: "https://randomuser.me/api/portraits/men/58.jpg",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
