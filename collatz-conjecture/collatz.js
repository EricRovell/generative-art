const memo = {
  1: [1],
  2: [1, 2],
};

export default (int) => {
  const initial = int;
  const intList = [int];
  if (memo[int]) return intList.concat(memo[int]);

  while (int !== 1) {   

    if (int & 1) {
      int = 3 * int + 1
    } else {
      int /= 2;
    }

    intList.push(int);
  }

  memo[initial] = intList;
  return intList.reverse();  
};
