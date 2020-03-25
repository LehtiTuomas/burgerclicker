const testdata = [
  { id: '1',
    tyyppi: 'Sähkö', 
    summa: 437.50, 
    maksupaiva: '2019-03-20',
    kaudenalku: '2018-12-01',
    kaudenloppu: '2019-02-28',
    saaja: 'Fortum' },

  { id: '2',
    tyyppi: 'Vesi', 
    summa: 352.00, 
    maksupaiva: '2019-01-15',
    kaudenalku: '2018-10-01',
    kaudenloppu: '2018-12-31',
    saaja: 'Sastamalan vesilaitos' },

  { id: '3',
    tyyppi: 'Puhelin', 
    summa: 18.90, 
    maksupaiva: '2019-01-12',
    kaudenalku: undefined,
    kaudenloppu: undefined,
    saaja: 'Elisa Saunalahti' },

  { id: '4',
    tyyppi: 'Vero', 
    summa: 28.90, 
    maksupaiva: '2019-12-31',
    kaudenalku: '2018-01-01',
    kaudenloppu: '2018-12-31',
    saaja: 'Verovirasto' }
];

export default testdata