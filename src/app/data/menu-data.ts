export type MenuItem = {
    id: string;
    title: string;
    value: number;
  };
  
  export type MenuSection = {
    id: 'type1' | 'type2';
    title: string;
    items: MenuItem[];
  };
  
  export const SECTIONS: MenuSection[] = [
    {
      id: 'type1',
      title: 'Тип 1',
      items: [
        { id: 't1_i1', title: 'Item 1', value: 30 },
        { id: 't1_i2', title: 'Item 2', value: 40 },
        { id: 't1_i3', title: 'Item 3', value: 50 },
        { id: 't1_i4', title: 'Item 4', value: 60 },
      ],
    },
    {
      id: 'type2',
      title: 'Тип 2',
      items: [
        { id: 't2_i1', title: 'Item 1', value: 30 },
        { id: 't2_i2', title: 'Item 2', value: 40 },
        { id: 't2_i3', title: 'Item 3', value: 50 },
        { id: 't2_i4', title: 'Item 4', value: 60 },
      ],
    },
  ];