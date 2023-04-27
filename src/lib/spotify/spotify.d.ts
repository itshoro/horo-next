interface Artist {
  name: string;
  url: string;
}

interface Album {
  name: string;
  images: {
    height: number;
    width: number;
    url: string;
  }[];
}
