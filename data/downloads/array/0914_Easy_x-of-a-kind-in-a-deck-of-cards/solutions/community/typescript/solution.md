# checking for CD (common divisors), not for GDC

**Author:** spatulatom
**Votes:** 0
**Link:** [https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/4548712/](https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/4548712/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem 914 can be seen as finding GDC but that is only once there are two types of cards in the deck. If there is only one type of card in the deck, like deck=[2,2,2,2,2]
then we only need to check for divisors > 1.
But even when there is more types of cards in the deck we can check for common divisors (CD)
not necessrly greatest common divisor (GTC).  If common divisors exist that means that cards
can be divided evenly.
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: can be broken down into three parts:
1. Building the Hash Map (hash): This operation takes O(n), where n is the number of elements in the deck.
2. Finding Divisors (divisors array): I think the worst-case time complexity for finding divisors could be considered O(m * sqrt(m)) because, in the worst case, checking divisors up to the square root of m.
3. Finding Common Divisors (common array): iterating through the divisors array multiple times, each time checking for common divisors. I think in the worst case, we might compare the divisors k times. If the maximum count is m, this step could be considered O(k * m).
4. Combining these steps we get sth like O(n + m * sqrt(m) + k * m). i admit not being very sure here
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function hasGroupsSizeX(deck: number[]): boolean {
  // if only one card in the deck or deck is empty there can't be two or
  // more players so return false
  if (deck.length < 2) return false;
  const hash: { [key: number]: number } = {};

  //  create a hash that groups the same cards in the deck ex: deck=[1,2,2] - hash={1: 1, 2: 2}
  for (let i = 0; i < deck.length; i++) {
    hash[deck[i]] = (hash[deck[i]] ?? 0) + 1;
  }
  // make an array out of that hash, values = [1,2]
  let values = Object.values(hash);

  //  1. checking for divisors of every type of card.
  // for each entry in values create an array that counts all integers starting from 2
  // and equal the value. we setting up the ground for checking possible divisors of
  // that value, we dont want 1 as a divisor (since there are at leat tweo players)
  // so for values = [1,1] we will have tow arrays lenght 1, [2] and [2,3]
  const divisors = [];
  for (let i = 0; i < values.length; i++) {
    const arr = Array.from({ length: values[i] }, (v, i) => i + 2);
    const subDivisors = [];

    // now we iterate [2] and [2,3] respectively and see if those values are divisors
    // if they are push them into subDivisors and then divisors array
    // in our case they are not so divisors will have two  arrays, one empty pushed and
    // will look divisors = [[],2]]
    for (let j = 0; j < arr.length; j++) {
      if (values[i] % arr[j] === 0) {
        subDivisors.push(arr[j]);
      }
    }
    divisors.push(subDivisors);
  }

  // if deck=[1,1,1,1,1] meaning on type of card than divisors will only have one array
  // and we can be sure that it is not deck =[1] (because deck.length<2 return false) so
  // surley card can be divided between players
  if (divisors.length === 1) return true;

  //   2. Checking for common divisors.
  // at this stage surly divisors.length=>2 for our deck=[1,2,2] we have divisors =[[],[2]]
  // a) and the logic below first checks common divisors of entry 0 and 1 in divisors
  // and creates new array 'common' with common divisors of those two entries:

  // since our example divisors = [[],[2]], left = -1, right =0 and the loop
  // below wont run, meaning there is no common divisors, so common will stay as empty array
  let left = divisors[0].length - 1;
  let right = divisors[1].length - 1;
  let common: number[] = [];

  while (left >= 0 && right >= 0) {
    if (divisors[0][left] === divisors[1][right]) {
      common.push(divisors[0][left]);
      left--;
      right--;
    } else if (divisors[0][left] > divisors[1][right]) {
      left--;
    } else {
      right--;
    }
  }
  common.reverse();
  // b) second part will pick up at index 2 in divisors array and try to find common divisors
  // between that array and common array (divisors that are already common for previous entries
  // in the divisors array) and then common array will be updated to new set of common divisors.
  for (let i = 2; i < divisors.length; i++) {
    let left = common.length - 1;
    let right = divisors[i].length - 1;
    const tempCommon = [];
    while (left >= 0 && right >= 0) {
      if (common[left] === divisors[i][right]) {
        tempCommon.push(common[left]);
        left--;
        right--;
      } else if (common[left] > divisors[i][right]) {
        left--;
      } else {
        right--;
      }
    }
    common = tempCommon.reverse();
  }
  // when the loop above finishes and common is not empty it means that there are common divisors
  // so card can be divided between players.
  return common[common.length - 1] ? true : false;
}
```