# ✔💯 DAY 402 | BETTER | 100% 0ms | [PYTHON/JAVA/C++] | EXPLAINED | Approach 🆙🆙🆙

**Author:** ManojKumarPatnaik
**Votes:** 14
**Link:** [https://leetcode.com/problems/frequency-tracker/solutions/3494900/](https://leetcode.com/problems/frequency-tracker/solutions/3494900/)

---

# Please Upvote as it really motivates me \uD83C\uDD99\uD83C\uDD99\uD83C\uDD99
# Intuition & Approach
<!-- Describe your approach to solving the problem. -->
##### \u2022	Explanation:
##### \u2022	We use a HashMap  to store the count of each number and an array frequency to store the frequency of each count.
##### \u2022	 We initialize the frequency array with a size of 1e5+1.
##### \u2022	The add method takes a number as input and does the following:
##### \u2022	It gets the current count of the number from the map
##### \u2022	If the current count is already present, it decrements its frequency in the frequency array.
##### \u2022	It increments the count of the number in the map
##### \u2022	It increments the frequency of the new count in the frequency array.
##### \u2022	The deleteOne method takes a number as input and does the following:
##### \u2022	It gets the current count of the number from the map
##### \u2022	If the count is not null, it decrements the frequency of the current count in the frequency array.
##### \u2022	If the count is 1, it removes the number from the map
##### \u2022	If the count is greater than 1, it decrements the count of the number in the map and increments the frequency of the new count in the frequency array.
##### \u2022	The hasFrequency method takes a number as input and returns true if the frequency of the number is greater than 0 in the frequency array.



# Complexity
- Time complexity:o(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:o(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
private final Map<Integer,Integer> map; // Map to store the count of each number
private final int[] frequency; // Array to store the frequency of each count
public FrequencyTracker() {
    map = new HashMap<>();
    frequency = new int[(int) 1e5 + 1]; // Initialize the frequency array with a size of 10^5 + 1
}

public void add(int number) {
    Integer freq = map.getOrDefault(number, 0); // Get the current count of the number
    if (freq != null && frequency[freq] > 0) { // If the current count is already present, decrement its frequency
        frequency[freq]--;
    }
    map.compute(number, (k, v) -> v == null ? 1 : v + 1); // Increment the count of the number in the map
    frequency[map.get(number)]++; // Increment the frequency of the new count in the frequency array
}

public void deleteOne(int n) {
    Integer count = map.get(n); // Get the current count of the number
    if (count != null) {
        frequency[count]--; // Decrement the frequency of the current count in the frequency array
        if (count == 1) {
            map.remove(n); // If the count is 1, remove the number from the map
        } else {
            map.put(n, count - 1); // Decrement the count of the number in the map
            frequency[map.get(n)]++; // Increment the frequency of the new count in the frequency array
        }
    }
}

public boolean hasFrequency(int number) {
    return number < this.frequency.length && this.frequency[number] > 0; // Check if the frequency of the given number is greater than 0
}
```
```c++ []
class FrequencyTracker {
private:
    std::unordered_map<int, int> map; // Map to store the count of each number
    std::vector<int> frequency; // Vector to store the frequency of each count

public:
    FrequencyTracker() {
        frequency.resize(1e5 + 1); // Initialize the frequency vector with a size of 10^5 + 1
    }

    void add(int number) {
        int freq = map[number]; // Get the current count of the number
        if (freq > 0 && frequency[freq] > 0) { // If the current count is already present, decrement its frequency
            frequency[freq]--;
        }
        map[number]++; // Increment the count of the number in the map
        frequency[map[number]]++; // Increment the frequency of the new count in the frequency vector
    }

    void deleteOne(int n) {
        int count = map[n]; // Get the current count of the number
        if (count > 0) {
            frequency[count]--; // Decrement the frequency of the current count in the frequency vector
            if (count == 1) {
                map.erase(n); // If the count is 1, remove the number from the map
            } else {
                map[n]--; // Decrement the count of the number in the map
                frequency[map[n]]++; // Increment the frequency of the new count in the frequency vector
            }
        }
    }

    bool hasFrequency(int number) {
        return number < frequency.size() && frequency[number] > 0; // Check if the frequency of the given number is greater than 0
    }
};
```
```python []
class FrequencyTracker:
    def __init__(self):
        self.map = {} # Dictionary to store the count of each number
        self.frequency = [0] * (10**5 + 1) # List to store the frequency of each count

    def add(self, number):
        freq = self.map.get(number, 0) # Get the current count of the number
        if freq > 0 and self.frequency[freq] > 0: # If the current count is already present, decrement its frequency
            self.frequency[freq] -= 1
        self.map[number] = freq + 1 # Increment the count of the number in the map
        self.frequency[self.map[number]] += 1 # Increment the frequency of the new count in the frequency list

    def deleteOne(self, n):
        count = self.map.get(n, 0) # Get the current count of the number
        if count > 0:
            self.frequency[count] -= 1 # Decrement the frequency of the current count in the frequency list
            if count == 1:
                del self.map[n] # If the count is 1, remove the number from the map
            else:
                self.map[n] = count - 1 # Decrement the count of the number in the map
                self.frequency[self.map[n]] += 1 # Increment the frequency of the new count in the frequency list

    def hasFrequency(self, number):
        return number < len(self.frequency) and self.frequency[number] > 0 # Check if the frequency of the given number is greater than 0
```



![BREUSELEE.webp](./images/0.webp)
![image.png](./images/1.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D \uD83C\uDD99\uD83C\uDD99\uD83C\uDD99
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A