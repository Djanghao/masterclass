# 😎Brute Force to Efficient Method 100% beat🤩 | Java | C++ | Python | JavaScript

**Author:** Akhilesh21
**Votes:** 20
**Link:** [https://leetcode.com/problems/number-of-segments-in-a-string/solutions/4125742/](https://leetcode.com/problems/number-of-segments-in-a-string/solutions/4125742/)

---

1. Java
2. C++
3. Python
4. JavaScript


# Java
## Java 1st Method :- Brute force

1. We split the input string s into an array of words using the split method with a space as the delimiter. This will give us an array of substrings separated by spaces.
2. We initialize a variable count to keep track of the number of segments.
3. We iterate through each word in the words array.
4. For each word, we check if it's not empty (i.e., it contains at least one non-space character). If it's not empty, we increment the count variable.
5. Finally, we return the count as the number of segments in the string.

>While this brute force approach works, it's not the most efficient way to solve this problem. We can optimize it by avoiding the split operation and iterating through the characters of the string, counting segments as we go.


## Code
``` Java []
class Solution {
    public int countSegments(String s) {
        // Split the string into words using spaces as separators
        String[] words = s.split(" ");
        int count = 0;

        // Count non-empty words
        for (String word : words) {
            if (!word.isEmpty()) {
                count++;
            }
        }

        return count;
    }
}
```

## Complexity
#### Time complexity: O(n + k);
- The `split` method is used to `split` the string into words using spaces as separators. The `split` method generally has a time complexity of O(n), where n is the length of the input string `s`.
- The subsequent loop iterates over the array of words, which has a length equal to the number of segments in the string. In the worst case, if there are k segments, this loop has a time complexity of O(k), as it iterates through each word.

So, the overall time complexity of this solution is O(n + k), where n is the length of the input string `s`, and k is the number of segments in the string.
#### Space complexity: O(k);
- The `split` method creates an array of strings to store the words. The space required for this array is proportional to the number of words in the string, which is equal to the number of segments. So, the space complexity for the `words` array is O(k).
- The integer variable `count` and the `word` variable used in the loop have constant space requirements and do not depend on the input size.

Therefore, the overall space complexity of this solution is O(k), where k is the number of segments in the string.

## Java 2nd Method :- Efficient Method
1. We initialize the `count` variable to keep track of the number of segments and a boolean `inSegment` to track whether we are currently inside a segment.
2. We iterate through each character in the input string `s` using a for-each loop.
3. For each character, we check if it's not a space (`' '`). If it's not a space and we were not previously in a segment, we set `inSegment` to `true` and increment the `count`. This accounts for the start of a new segment.
4. If the character is a space, we set `inSegment` to `false`. This indicates that we are not inside a segment.
5. Finally, we return the `count` as the number of segments in the string.

>This more efficient approach does not require splitting the string into an array, making it faster and using less memory.



## Code
``` Java []
class Solution {
    public int countSegments(String s) {
        int count = 0;
        boolean inSegment = false;

        // Iterate through the characters in the string
        for (char c : s.toCharArray()) {
            if (c != ' ') {
                // If the character is not a space, we are in a segment
                if (!inSegment) {
                    inSegment = true;
                    count++;
                }
            } else {
                // If the character is a space, we are not in a segment
                inSegment = false;
            }
        }
        return count;
    }
}
```
## Complexity
#### Time complexity: O(n);
- The code iterates through each character in the input string, where "n" is the length of the string.
- For each character, it performs constant-time operations to check whether the character is a space and to update the count and inSegment variables.

Therefore, the time complexity of this solution is O(n), where "n" is the length of the input string.
#### Space complexity: O(1);
- The code uses a constant amount of extra space for the integer variable count and the boolean variable inSegment. These variables do not depend on the size of the input string.
- It also uses the enhanced for loop, which does not create any additional data structures or arrays. The s.toCharArray() operation is done in place and does not allocate extra memory.

As a result, the space complexity of this solution is O(1), indicating that the space used is constant and does not depend on the input size.

# C++
## C++ 1st Method :- Brute force

1. We include the necessary header files for `std::istringstream` and `std::string`.
2. In the `countSegments` function, we create an `istringstream` object `iss` and initialize it with the input string `s`. This allows us to treat the input string as a stream of words.
3. We declare a `string` variable `word` to hold each word as we extract them from the stream.
4. We initialize a variable `count` to keep track of the number of segments.
5. Using a `while` loop, we extract words from the `istringstream` object `iss` one by one using the `>>` operator. The loop continues until there are no more words to extract.
6. For each word extracted, we increment the `count` variable.
7. Finally, we return the `count` as the number of segments in the string.

## Code
``` C++ []
class Solution {
public:
    int countSegments(string s) {
        istringstream iss(s);
        string word;
        int count = 0;

        while (iss >> word) {
            count++;
        }

        return count;
    }
};
```

## Complexity
#### Time complexity: O(n + k);
- Creating the `istringstream` object takes O(n) time, where n is the length of the input string `s`.
- The while loop iterates over the words in the string. In the worst case, if there are `k` words in the string, it will run `k` times.

Therefore, the overall time complexity of this solution is O(n + k), where n is the length of the input string, and k is the number of segments (words) in the string.
#### Space complexity: O(n);
- The `istringstream` object stores a copy of the input string, which contributes to additional space usage. The space required for `istringstream` is O(n), where n is the length of the input string.
- The space required for the `word` variable is constant and doesn't depend on the input size.

Therefore, the overall space complexity of this solution is O(n) because of the `istringstream` object.

## C++ 2nd Method :- Efficient Method
1. In the efficient approach, we include the necessary header file for `std::string`.
2. We declare the `countSegments` function, which takes a string `s` as input.
3. We initialize the `count` variable to keep track of the number of segments and a boolean `inSegment` to track whether we are currently inside a segment.
4. Using a `for` loop to iterate through each character in the input string `s`.
5. For each character, we check if it's not a space (`' '`). If it's not a space and we were not previously in a segment, we set `inSegment` to `true` and increment the `count`, which accounts for the start of a new segment.
6. If the character is a space, we set `inSegment` to `false`, indicating that we are not inside a segment.
7. Finally, we return the `count` as the number of segments in the string.

## Code
``` C++ []
class Solution {
public:
    int countSegments(string s) {
        int count = 0;
        bool inSegment = false;

        for (char c : s) {
            if (c != ' ') {
                // If the character is not a space, we are in a segment
                if (!inSegment) {
                    inSegment = true;
                    count++;
                }
            } else {
                // If the character is a space, we are not in a segment
                inSegment = false;
            }
        }

        return count;
    }
};
```
## Complexity
#### Time complexity: O(n);
- The code iterates through each character in the input string s exactly once. During each iteration, it performs a constant amount of work, which includes checking whether the character is a space and updating the count and inSegment variables accordingly. Therefore, the time complexity is O(n), where n is the length of the input string s.
#### Space complexity: O(1);
- The code uses a constant amount of extra space to store the count and inSegment variables, regardless of the size of the input string s. It doesn't use any additional data structures or memory allocation that depends on the input size. Therefore, the space complexity is O(1), which means it has constant space complexity.

# Python
## Py 1st Method :- Brute force
The brute force approach is simple. We can iterate through each character in the string and count the segments based on the following conditions:

1. Start counting when we encounter a non-space character after a space.
2. Keep counting until we encounter a space character.
## Code
``` Python []
class Solution:
    def countSegments(self, s: str) -> int:
        # Initialize a variable to keep track of the count of segments.
        count = 0
        # Initialize a flag to check if we are inside a segment.
        inside_segment = False
        
        # Iterate through each character in the string.
        for char in s:
            # If the current character is not a space and we are not inside a segment, start a new segment.
            if char != ' ' and not inside_segment:
                count += 1
                inside_segment = True
            # If the current character is a space and we are inside a segment, mark the end of the segment.
            elif char == ' ' and inside_segment:
                inside_segment = False
        
        return count

```
## Complexity
#### Time complexity: O(n);
- The algorithm iterates through each character in the input string exactly once.
- In each iteration, it performs some constant-time operations such as comparisons and updates.
- Therefore, the time complexity of this solution is O(n), where n is the length of the input string `s`.
#### Space complexity: O(1);
- The algorithm uses a constant amount of extra space to store the `count` and `inside_segment` variables, regardless of the input size.
- Therefore, the space complexity of this solution is O(1), indicating that it uses constant space.

## Py 2nd Method :- Efficient Method
>We can optimize the solution by splitting the string using the built-in split() method in Python and counting the non-empty segments. This method is more concise and efficient.


## Code
``` Python []
class Solution:
    def countSegments(self, s: str) -> int:
        # Use the split() method to split the string into segments based on spaces.
        segments = s.split()
        # Return the count of non-empty segments.
        return len(segments)

```
The `split()` method splits the string into a list of segments based on spaces. We then count the non-empty segments using `len()`. This approach has a time complexity of O(n) due to the `split()` operation but is generally faster and more concise than the brute force approach.
## Complexity
#### Time complexity: O(n);
- The split() method takes O(n) time, where n is the length of the input string s. It needs to iterate through the string to identify and split segments.
- The len() function takes O(1) time because it simply returns the length of the segments list, which has already been created.

Overall, the time complexity of the countSegments function is O(n) due to the split() operation.
#### Space complexity: O(n);
- The `segments` list is created, which stores the `segments` produced by splitting the input string. In the worst case, if there are no spaces in the input string, the `segments` list would contain a single element with the entire input string. 
Therefore, the space complexity for the `segments` list is O(n), where n is the length of the input string.
- The `len()` function and other variables used have constant space requirements.

Overall, the space complexity of the `countSegments` function is O(n) due to the `segments` list.

# JavaScript
## Js 1st Method :- Brute force
>We can split the input string by spaces, and then count the number of non-empty segments. 

>In this approach, we split the string by spaces, and then iterate through the resulting array to count non-empty segments. This approach works but may not be the most efficient, especially for large input strings.
## Code
``` JavaScript []
var countSegments = function(s) {
    // Split the input string by spaces
    const segments = s.split(' ');
    
    let count = 0;
    // Iterate through the segments and count non-empty ones
    for (const segment of segments) {
        if (segment !== '') {
        count++;
        }
    }
    
    return count;
};
``` 
## Complexity
#### Time complexity: O(n + m);
- Splitting the string using `s.split(' ')` takes O(n) time, where 'n' is the length of the input string 's'. This is because we need to go through the entire string to identify spaces and split it accordingly.
- Iterating through the segments using a `for...of` loop takes O(m) time, where 'm' is the number of segments.
- Inside the loop, the check `if (segment !== '')` is a constant-time operation.

Combining these steps, the overall time complexity of the function is O(n + m), where 'n' is the length of the input string, and 'm' is the number of segments.

#### Space complexity: O(n);
- The `segments` array stores the segments of the input string, so its space complexity is O(m), where 'm' is the number of segments.
- In the worst case, if the input string has no spaces, the number of segments 'm' will be equal to the length of the input string 'n'. Therefore, the space complexity is O(n).
 
## Js 2nd Method :- Efficient Method
>To optimize the solution, we can count the segments without explicitly splitting the string. We can iterate through the characters of the string and check for transitions from space to non-space characters. Here's the code for the more efficient approach:
## Code
``` JavaScript []
var countSegments = function(s) {
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        // Check if the current character is a non-space character and the previous character is a space or the start of the string
        if (s[i] !== ' ' && (i === 0 || s[i - 1] === ' ')) {
        count++;
        }
    }
    
    return count;
}
```
>In this efficient approach, we iterate through the characters of the string, and whenever we encounter a non-space character that is preceded by a space or is at the beginning of the string, we increment the count. This avoids splitting the string and is more efficient for large input strings with many spaces.java
# Complexity
#### Time complexity: O(n);
- where n is the length of the input string s. This is because the function iterates through each character in the string once.
#### Space complexity: O(1);
-  it uses a constant amount of extra space regardless of the size of the input string. The function only uses a few variables (e.g., count, i), and the space required for these variables does not depend on the size of the input string. Therefore, the space complexity is constant.
