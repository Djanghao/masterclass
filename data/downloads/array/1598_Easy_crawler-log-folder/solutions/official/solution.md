# Official Solution

**Link:** [https://leetcode.com/problems/crawler-log-folder/solution/](https://leetcode.com/problems/crawler-log-folder/solution/)

---

[TOC]

## Solution

---

### Overview

Given a list of strings `logs`, the task is to calculate the minimum steps needed to navigate back to the main folder.

Each string in `logs` represents a moving operation:

- `"../"`: To the Parent Folder
- `"./"`: Staying in the same Folder
- `"x/"`: To the Child Folder named `x`

---

### Approach 1: Counter

#### Intuition

To solve this problem, we need to track the user's position within the folder structure relative to the main folder. We can achieve this using a numerical counter that represents the depth of the current folder.

Here's how the counter system works when we move around the file system:

1. We initialize the counter to 0, representing the main folder.
2. If we enter a child folder (`"x/"`), we increase the counter by 1 to go deeper into the folder structure.
3. When we encounter `"../"`, we decrease the counter by 1 to move up a level. If the counter is already at 0, it remains at 0 because we can't move above the main folder.
4. `"./"` operations do not change the counter since they keep us in the current folder.

We process each operation in the `logs` sequentially, updating our counter according to these rules. This approach allows us to track the user's depth in the folder structure without needing to store or process the actual folder names or full paths.

#### Algorithm

- Initialize `folderDepth` to `0` to keep track of the current depth in the file system.
- For each `currentOperation` in `logs`, perform the following steps:
    - If `currentOperation` equals `"../"`, decrease `folderDepth` by `1` to move up one directory level, but ensure `folderDepth` does not go below `0` (to prevent navigating above the root directory).
    - If `currentOperation` equals `"./"`, ignore it, as it means staying in the current directory and does not affect `folderDepth`.
    - For any other `currentOperation`(`"x/"`), increment `folderDepth` by `1`, indicating moving into a new directory.
- Return `folderDepth` as the minimum number of operations required to navigate back to the main folder.

#### Implementation

<iframe src="https://leetcode.com/playground/LwX2yRUJ/shared" frameBorder="0" width="100%" height="446" name="LwX2yRUJ"></iframe>

#### Complexity Analysis

Let $n$ be the size of `logs` array.

- Time complexity: $O(n)$

    The algorithm iterates through each operation exactly once.
    
    > Note: String matching operations take linear time with respect to the length of the string. However, given the constraint that the length of the strings is limited to 10, this does not significantly impact the overall time complexity. 

- Space complexity: $O(1)$

    The algorithm uses a constant amount of extra space (`folderDepth`), regardless of the size of `logs`.

---

### Approach 2: Stack

#### Intuition

There’s no need for a stack or other data structures because we only care about the depth, not the actual path taken. We include this approach here for completeness in the article, in case you might be asked about the actual path in an interview scenario.

We use a stack to represent the folder structure, where each element denotes a folder and the stack's height indicates our current depth in the structure.

Starting with an empty stack represents being in the main folder. We process each operation in the `logs` array sequentially:
- When we encounter a folder name (any operation that isn't `"../"` or `"./"`), we push it onto the stack, signifying entry into a new folder.
- Upon encountering `"../"`, we move up to the parent folder by popping the top element from the stack, provided the stack isn't empty. An empty stack means we're already at the main folder.
- `"./"` operations are ignored as they maintain the current folder context.

After processing all operations, the stack's height reflects our depth in the folder structure. This height also corresponds to the number of operations needed to return to the main folder, as each `"../"` operation represents moving up one level.

> This algorithm may not seem directly useful if you're just looking to solve this specific question, but in practice, it mirrors how we navigate folders in real life. Entering a folder adds it to your path, and going up removes the last folder from your path. It naturally handles redundant operations. If you enter and then immediately exit a folder, the stack returns to its previous state, akin to real folder navigation. It retains only the essential information: the folders necessary to return to the main folder at any point.

#### Algorithm
 
- Initialize an empty stack `folderStack`. This stack will track the sequence of directories as we navigate through them.
- For each `currentOperation` in `logs`, perform the following steps:
    - If `currentOperation` equals `"../"`, check if `folderStack` is not empty. If true, pop the top directory from `folderStack` to move up to the parent directory.
    - If `currentOperation` equals `"./"`, ignore it as it signifies staying in the current directory and does not change the stack.
    - For any other `currentOperation`, push `currentOperation` onto `folderStack`, indicating we are entering a new directory.
- Operations such as `"./"` are ignored because they do not change the current directory structure represented by `folderStack`.
- Return the size of `folderStack` as it represents the minimum number of operations required to navigate the file system effectively. The size of `folderStack` corresponds to the depth of the directory structure we have navigated.

The algorithm is visualized below:

!?!../Documents/1598/approach2.json:975,448!?!

#### Implementation

<iframe src="https://leetcode.com/playground/ee2qZzRi/shared" frameBorder="0" width="100%" height="429" name="ee2qZzRi"></iframe>

#### Complexity Analysis

Let $n$ be the size of `logs` array.

* Time complexity: $O(n)$

    The algorithm iterates through each operation exactly once. This is because each operation (`push` or `pop`) on the stack is $O(1)$, and we perform exactly one operation per entry in logs.

* Space complexity: $O(n)$

    The algorithm uses linear amount of extra space (`folderStack`). This is because the stack (`folderStack`) can store up to `n` entries.

---