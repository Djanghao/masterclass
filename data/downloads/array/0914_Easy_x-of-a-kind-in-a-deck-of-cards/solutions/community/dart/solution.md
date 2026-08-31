# Dart Simple Solution

**Author:** aswanth_ds_
**Votes:** 0
**Link:** [https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/3935058/](https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/3935058/)

---

# Intuition
This method takes a list of integers deck as input and aims to determine whether it's possible to partition the deck into groups where each group has the same integer written on them and each group has a size greater than or equal to 2. 

# Approach
**Checking Empty Deck:**
The first thing the code does is check whether the deck is empty. If it is, the function immediately returns false. This is a basic optimization to handle the case where the input is empty.

**Counting Card Occurrences:**
The code then initializes an empty Map<int, int> called cardCounts to keep track of the count of each card in the deck. It iterates through each card in the deck list using a for-each loop. For each card, it increments the count in the cardCounts map using the value as the key. If the card is encountered for the first time, it sets the count to 1.

**Calculating Greatest Common Divisor (GCD):**
 The gcd function is defined to calculate the greatest common divisor (GCD) of two integers a and b using the Euclidean algorithm. The GCD is a mathematical property that helps in finding a common divisor for numbers. The code uses this function to calculate the GCD of all the card counts in the cardCounts map by using the reduce function. The reduce function applies the gcd function iteratively to all card counts and accumulates the result.

**Returning the Result:**
After calculating the GCD of all the card counts, the code checks whether the calculated countGCD is greater than or equal to 2. If the countGCD is 2 or greater, it means that there exists a group size greater than 1 for which the partition is possible, satisfying the conditions. Therefore, the function returns true, indicating that the partition is possible. If the countGCD is less than 2, it means that it's not possible to partition the deck as per the conditions, and the function returns false.

# Complexity
- Time complexity:

Counting Card Occurrences:The loop that counts the occurrences of cards in the deck iterates through each card exactly once. This loop has a time complexity of O(N), where N is the number of cards in the deck.

Calculating GCD:The reduce function is used to calculate the GCD of the card counts. This operation requires applying the gcd function iteratively to all card counts, which results in a time complexity of O(K), where K is the number of distinct card values.

The overall time complexity of the solution is determined by the sum of the two mentioned time complexities, which is O(N + K).

 - Space complexity:

Card Counts Map: The space complexity is primarily determined by the usage of the cardCounts map. In the worst case, if all card values are distinct, there could be up to N entries in the map (one for each card). So, the space complexity of maintaining this map is O(N).

Additional Variables: The additional variables used in the solution, like countGCD, a, b, and others in the gcd function, require constant space, so they don't significantly contribute to the space complexity.

The overall space complexity is therefore O(N).

# Code
```
class Solution {
 bool hasGroupsSizeX(List<int> deck) {
  if (deck.isEmpty) {
    return false;
  }

  Map<int, int> cardCounts = {};
  for (int card in deck) {
    cardCounts[card] = (cardCounts[card] ?? 0) + 1;
  }

  int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
  }

  int countGCD = cardCounts.values.reduce(gcd);
  return countGCD >= 2;
}

}
```