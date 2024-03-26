const getStar = (s) => {
  return Array.from({ length: s }, (_, i) => i + 1).map((_time) => {
    return <Image key={_time} src={star} width="20" height="20" alt="" />;
  });
};
