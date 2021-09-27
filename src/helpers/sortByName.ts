interface MagicDragon {
  createdAt: string;
  name: string;
  type: string;
  histories?: string[];
  id: string;
  avatar: string;
}

export default function sortByName(data: MagicDragon[]) {
  return data.sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );
}
