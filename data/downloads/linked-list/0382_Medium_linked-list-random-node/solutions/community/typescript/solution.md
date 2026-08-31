# [C++, TypeScript, JavaScript] 🔥🔥 - Very Easy Soultion (No Extra Space - No Recursion) ✅✅

**Author:** ab_elhaddad
**Votes:** 4
**Link:** [https://leetcode.com/problems/linked-list-random-node/solutions/3279651/](https://leetcode.com/problems/linked-list-random-node/solutions/3279651/)

---

##### This solution focuses on the memory complexity rather than the time complexity.

# Intuition
To select a random node in a linked list we have to generate a random nubmer which represents the node to be selected (It has to be greater than or equal zero and less than the list length). Hence we need to get the list length when an object is created, So we call `countListLength()`. This function iterates through the list and count its length. In the `getRandom()` we generate a new random index and iterate through the list till we find and return it.

# Approach
1. Initialize the head of the linked list
2. Calling the `countListLength()` to count list length 
3. Calling `srand()` to Set a different starting point using `time(0)`
4. Generating every time `getRandom()` is called a new index between [0, length)
5. Iterating through the list to reach the desirde node which matches the generated index to return its value

</br>

**Note:** In the `C++` solution I used the `rand()` and the `srand()`, The reason I called `srand()` in the constructor is that it sets the starting point for producing a series of random integers. If `srand()` is not called, the `rand()` seed is set as if `srand(1)` were called at the program start. This will lead to the `rand()` producing the same sequence of integers every time it is called. So I have called the `srand()` in the constructor and pass it the seed value by calling `time(0)` as it returns a `time_t` value which varies every time. For further reading check this [article](https://www.geeksforgeeks.org/rand-and-srand-in-ccpp/).

# Complexity
- **Time complexity:** $$O(n * m)$$
 Where the `n` is length of the linked list and `m` is the number of times of calling `getRandom()`.

- **Space complexity:** $$O(1)$$

# Code
```C++ []
class Solution {
public:
    ListNode* head;
    int length;

    Solution(ListNode* h) {
        // Asigning the head node to the head attribute
        head = h;
        // Asigning the list length to the gloabal length attribute
        length = countListLength();
        // Setting a different starting point for producing a series of random integers [using time function as seed]
        srand(time(0));
    }

    // A function to iterate through the list and returns its length
    int countListLength(){
        int length = 0;
        ListNode* node = head;

        // Keep increasing the length variable until reaching a NULL node
        while (node) {
            length++;
            node = node -> next;
        }

        return length;
    }
    
    int getRandom() {
      // Generating random number where (0 <= indx < length)
      int indx = rand() % length;

      ListNode* node = head;

      // Iterating through the list to reach the desirde node to return its value
      while(indx--){
        node = node -> next;
      }

      return node -> val;
    }
};
```
```TypeScript []
class Solution {
    length: number = 0;
    head: ListNode | null;

    constructor(h: ListNode | null) {
        // Asigning the head node to the head attribute
        this.head = h;
        // Calling the countListLength function to assign the length of the list to the length attribute
        this.countListLength();
    }

    // A function to iterate through the list and count its length
    countListLength(): void {
        this.length = 0;
        let node: ListNode | null = this.head;

        // Keep increasing the length attribute until reaching a NULL node
        while (node !== null) {
            node = node.next;
            this.length++;
        }
    }

    getRandom(): number {
      // Generating random number where (0 <= indx < length)
        let indx = Math.floor(Math.random() * this.length);

        let node = this.head;

// Iterating through the list to reach the desirde node to return its value
        while (indx-- && node)
            node = node?.next;

        return node ? node.val : Infinity;
    }
}
```
```JavaScript []
class Solution {
    length;
    head;

    constructor(h) {
        // Asigning the head node to the head attribute
        this.head = h;
        // Calling the countListLength function to assign the length of the list to the length attribute
        this.countListLength();
    }

    // A function to iterate through the list and count its length
    countListLength() {
        this.length = 0;
        let node = this.head;

        // Keep increasing the length attribute until reaching a NULL node
        while (node !== null) {
            node = node.next;
            this.length++;
        }
    }

    getRandom() {
      // Generating random number where (0 <= indx < length)
        let indx = Math.floor(Math.random() * this.length);

        let node = this.head;

// Iterating through the list to reach the desirde node to return its value
        while (indx-- && node)
            node = node?.next;

        return node ? node.val : Infinity;
    }
}
```
