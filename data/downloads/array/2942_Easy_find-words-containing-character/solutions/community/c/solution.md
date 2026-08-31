# ✅☑[C++/Java/Python/JavaScript] || 2 Approaches || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-words-containing-character/solutions/4329015/](https://leetcode.com/problems/find-words-containing-character/solutions/4329015/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**

#### ***Approach 1(In-Built function)***
1. The `findWordsContaining` function searches through a vector of strings to identify words containing a specific character, `x`.

1. It iterates through each word in the input vector and counts occurrences of the character `x` within the word.

1. If the count is greater than zero (i.e., if the character `x` is present in the word), it adds the index of that word to the result vector.

1. Finally, it returns a vector containing indices of words that contain the specified character `x`.

# Complexity
- *Time complexity:*
   $$O(n^2)$$
    

- *Space complexity:*
   $$O(1)$$
    


# Code
```C++ []


using namespace std;

class Solution {
public:
    // Function to find words containing a given character 'x'
    vector<int> findWordsContaining(vector<string>& words, char x) {
        int N = words.size(); // Total number of words in the input vector
        vector<int> ans; // Vector to store the indices of words containing the character 'x'

        // Loop through each word in the input vector
        for(int i = 0; i < N; i++) {
            // Count the occurrences of character 'x' in the current word using count function
            if (count(words[i].begin(), words[i].end(), x) > 0) {
                ans.push_back(i); // If the character 'x' is found, add the index to the result vector
            }
        }
        return ans; // Return the vector containing indices of words containing the character 'x'
    }
};



```
```C []


int countCharacterOccurrences(char *str, char x) {
    int count = 0;
    while (*str != '\\0') {
        if (*str == x) {
            count++;
        }
        str++;
    }
    return count;
}

int* findWordsContaining(char** words, int wordsSize, char x, int* returnSize) {
    int* indices = (int*)malloc(wordsSize * sizeof(int));
    int count = 0;
    
    for (int i = 0; i < wordsSize; i++) {
        if (countCharacterOccurrences(words[i], x) > 0) {
            indices[count++] = i;
        }
    }
    
    *returnSize = count;
    return indices;
}





```
```Java []

class Solution {
    public List<Integer> findWordsContaining(List<String> words, char x) {
        int N = words.size(); // Total number of words in the input list
        List<Integer> ans = new ArrayList<>(); // List to store the indices of words containing the character 'x'

        // Loop through each word in the input list
        for (int i = 0; i < N; i++) {
            // Check if the current word contains the character 'x'
            if (words.get(i).indexOf(x) != -1) {
                ans.add(i); // If 'x' is found, add the index to the result list
            }
        }
        return ans; // Return the list containing indices of words containing the character 'x'
    }
}

```
```python3 []
class Solution:
    def findWordsContaining(self, words, x):
        ans = []  # List to store the indices of words containing the character 'x'

        # Loop through each word in the input list
        for i, word in enumerate(words):
            # Check if the current word contains the character 'x'
            if x in word:
                ans.append(i)  # If 'x' is found, add the index to the result list

        return ans  # Return the list containing indices of words containing the character 'x'



```
```javascript []
function findWordsContaining(words, x) {
    let indices = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            indices.push(i);
        }
    }
    return indices;
}

```

---

#### ***Approach 2(Greedy Approach)***
1. Function Objective: The function findWordsContaining searches for the character 'x' in each word of the input vector and records the indices of words containing 'x'.

1. **Input Parameters:**

- **vector<string>& words:** The input vector containing a list of words.
- **char x:** The character to be found in the words.
1. **Processing Steps:**

- The function iterates through each word in the input vector.
- For each word, it iterates through each character to find if the character `x` exists within the word.
- When `x` is found in a word, the index of that word in the input vector is added to the result vector.
- The function returns a vector containing indices of `words` where `x` is found.
1. **Return Value:**

- **vector<int>:** Contains indices of words that contain the character `x`.

# Complexity
- *Time complexity:*
   $$O(n^2)$$
    

- *Space complexity:*
   $$O(1)$$
    


# Code
```C++ []


class Solution {
public:
    // Function to find words containing a given character 'x'
    vector<int> findWordsContaining(vector<string>& words, char x) {
        vector<int> ans; // Vector to store the indices of words containing 'x'

        // Iterate through each word in the input vector
        for (int j = 0; j < words.size(); j++) {
            string temp = words[j]; // Store the current word in a temporary string

            // Iterate through each character in the current word
            for (int i = 0; i < temp.size(); i++) {
                // Check if the character at index 'i' in the current word is equal to 'x'
                if (temp[i] == x) {
                    ans.push_back(j); // If found, add the index of the word to the result vector
                    break; // Move to the next word after finding 'x' in the current word
                }
            }
        }
        return ans; // Return the vector containing indices of words containing 'x'
    }
};



```
```C []

struct Vector {
    int *data;
    int size;
};

struct Vector findWordsContaining(char** words, int wordsSize, char x) {
    struct Vector ans;
    ans.size = 0;
    ans.data = (int *)malloc(sizeof(int) * wordsSize);

    for (int j = 0; j < wordsSize; j++) {
        char* temp = words[j];

        for (int i = 0; i < strlen(temp); i++) {
            if (temp[i] == x) {
                ans.data[ans.size++] = j;
                break;
            }
        }
    }
    return ans;
}



```
```Java []
public class Solution {
    // Function to find words containing a given character 'x'
    public List<Integer> findWordsContaining(List<String> words, char x) {
        List<Integer> ans = new ArrayList<>(); // List to store the indices of words containing 'x'

        // Iterate through each word in the input list
        for (int j = 0; j < words.size(); j++) {
            String temp = words.get(j); // Store the current word in a temporary string

            // Iterate through each character in the current word
            for (int i = 0; i < temp.length(); i++) {
                // Check if the character at index 'i' in the current word is equal to 'x'
                if (temp.charAt(i) == x) {
                    ans.add(j); // If found, add the index of the word to the result list
                    break; // Move to the next word after finding 'x' in the current word
                }
            }
        }
        return ans; // Return the list containing indices of words containing 'x'
    }
}


```
```python3 []
class Solution:
    # Function to find words containing a given character 'x'
    def findWordsContaining(self, words, x):
        ans = []  # List to store the indices of words containing 'x'

        # Iterate through each word in the input list
        for j in range(len(words)):
            temp = words[j]  # Store the current word in a temporary string

            # Iterate through each character in the current word
            for i in range(len(temp)):
                # Check if the character at index 'i' in the current word is equal to 'x'
                if temp[i] == x:
                    ans.append(j)  # If found, add the index of the word to the result list
                    break  # Move to the next word after finding 'x' in the current word

        return ans  # Return the list containing indices of words containing 'x'



```
```javascript []
function findWordsContaining(words, x) {
    let ans = [];

    for (let j = 0; j < words.length; j++) {
        let temp = words[j];

        for (let i = 0; i < temp.length; i++) {
            if (temp[i] === x) {
                ans.push(j);
                break;
            }
        }
    }
    return ans;
}



```

---


# PLEASE UPVOTE IF IT HELPED

---
---


---