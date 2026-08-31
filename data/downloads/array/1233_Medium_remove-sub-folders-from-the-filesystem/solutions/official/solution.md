# Official Solution

**Link:** [https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/solution/](https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/solution/)

---

[TOC]

## Solution

--- 

### Approach 1: Using Set

#### Intuition

The challenge is to efficiently determine when one folder is a sub-folder of another by finding folder paths and identifying hierarchical relationships. We can achieve this by storing all folder paths in a set, allowing us to quickly check if a folder is nested within another.

Once we have the set, the next logical step is to look at each folder in the list and check its “parent” paths by trimming off one part of the path at a time. For instance, if we have a folder `"/a/b/c"`, we’d first check `"/a/b"`, then `"/a"`. If any of these exist in the set, it means the current folder is a sub-folder, so we can skip it. On the other hand, if no parent path exists in the set, we can conclude it’s an independent folder and add it to our result.

By breaking each folder down like this, we can establish a relationship between folders and sub-folders. This approach is straightforward to understand if we’re dealing with a small number of folders, but it's not very efficient for large inputs since it involves checking multiple prefixes for each folder.

#### Algorithm

- Create a set `folderSet` containing all folder paths from the `folder` array for quick look-up.
- Initialize an empty array `result` to store folders that are not sub-folders.

- For each folder `f` in `folder`:
  - Set a flag `isSubFolder` to `false`.
  - Initialize `prefix` with the value of `f` to represent the current folder path.
  
  - Use a loop to check each parent path of `prefix`:
    - Find the position of the last `/` in `prefix` and remove everything after it to get the parent path.
    - If no `/` is found, break out of the loop (no more parent paths).
    
    - Check if this parent path exists in `folderSet`:
      - If it does, mark `isSubFolder` as `true` and exit the loop since `f` is a sub-folder.
    
  - If `isSubFolder` is still `false` after checking all parent paths, add `f` to `result`.

- After all, folders have been processed, return `result` which contains only the top-level folders (non-sub-folders).

#### Implementation

<iframe src="https://leetcode.com/playground/WTTqXHwm/shared" frameBorder="0" width="100%" height="500" name="WTTqXHwm"></iframe>

#### Complexity Analysis

Let $N$ be the number of folders and $L$ be the maximum length of a folder path.

- Time Complexity: $O(N \cdot L + N \cdot L^2) = O(N \cdot L^2)$

    Constructing the unordered set `folderSet` from the input array `folder` takes $O(N)$. However, each string insertion requires $O(L)$. So, initializing the set takes $O(N \cdot L)$.
    
    The primary operation involves iterating over each folder path in the `folder` array, which is $O(N)$.
    
    - For each folder, the algorithm checks all possible prefixes (up to `L` levels deep) in the `folderSet`. This involves:
    - Finding the position of the last '/' character in the `prefix` string, which takes $O(L)$ in the worst case.
    - Creating a substring for each prefix level, which is also $O(L)$.
    - Searching for each prefix in the set, which is $O(L)$.
    
    Therefore, checking all prefixes of one folder takes $O(L^2)$, and for $N$ folders, this results in $O(N \cdot L^2)$.
    
    The initialization and main loop lead to a time complexity of $O(N \cdot L + N \cdot L^2) \approx O(N \cdot L^2)$, as $O(N \cdot L^2)$ dominates.

- Space complexity: $O(N \cdot L)$

    The `folderSet` stores each of the $N$ folder paths. Each path can be as long as $L$, so the space complexity for the set is $O(N \cdot L)$.
  
    The array `result` stores each non-subfolder path. In the worst case, if none of the folders are subfolders, this array also takes $O(N \cdot L)$ space.
  
    Minor additional space is used for variables like `isSubFolder` and `prefix`. This additional space is constant, $O(1)$, and does not affect the overall complexity.
    
    The dominant space usage is from the `folderSet` and `result` array, leading to a total space complexity of $O(N \cdot L)$.

---

### Approach 2: Using Sorting

#### Intuition

To filter out sub-folders, we can take advantage of the natural order of paths by sorting the list of folders alphabetically. In this order, any sub-folder will appear directly after its parent folder. We can then filter sub-folders in a single pass through the sorted list.

Starting with an empty result list, we add the first folder. As we continue through the list, each folder is either a sub-folder of the last added folder (if it starts with that path plus a `/`) or it's an independent folder. For example, if the last added folder was `"/a"`, any folder beginning with `"/a/"` is a sub-folder and can be skipped. Otherwise, we add the folder to the result list.

!?!../Documents/1233/approach2.json:985,735!?!

#### Algorithm

- Sort the `folder` array alphabetically so that any sub-folder appears immediately after its parent folder.
- Initialize an empty array `result` to store non-sub-folder paths and add the first folder in `folder` to `result` as a baseline.

- For each folder `folder[i]` starting from the second folder:
  - Retrieve the last folder path added to `result` and append a `/` to it, storing it as `lastFolder`.
  
  - Check if `folder[i]` starts with `lastFolder`:
    - If it does, skip this folder since it is a sub-folder of `lastFolder`.
    - Otherwise, add `folder[i]` to `result` because it is not a sub-folder.
    
- After iterating through all folders, return `result`, which contains only the top-level folders (non-sub-folders).

#### Implementation

<iframe src="https://leetcode.com/playground/Eu4kVp7L/shared" frameBorder="0" width="100%" height="500" name="Eu4kVp7L"></iframe>

#### Complexity Analysis

Let $N$ be the number of folders and $L$ be the maximum length of a folder path.

- Time complexity: $O(N \cdot L \log N)$ 

    Sorting takes $O(N \cdot \log N)$ comparisons, but each comparison can involve up to $L$ characters (the maximum length of a folder path). Therefore, this step has a time complexity of $O(N \cdot L \log N)$.

    The loop runs $N-1$ times. For each folder, it does the following:
    - Retrieves the last folder from `result` and appends a `'/'` to it, which takes $O(L)$ time.
    - Uses compare to check if the current folder starts with the last added folder. This comparison will take $O(L)$ time in the worst case.
    Thus, the overall time complexity for this part is: $O(N \cdot L)$

    Therefore, combining the sorting and iteration steps, the total time complexity is: $O(N \cdot L \log N) + O(N \cdot L)$

    Since $O(N \cdot L \log N)$ dominates $O(N \cdot L)$, we can simplify the time complexity to $O(N \cdot L \log N)$.

- Space complexity: $O(N \cdot L)$

    The `result` array stores each folder that is not a sub-folder. In the worst case, every folder is added to `result`, which requires $O(N \cdot L)$ space.

    The space taken by the sorting algorithm depends on the language of implementation:

    In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log N)$.
    In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worst-case space complexity of $O(\log N)$.
    In Python, the `sort()` method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has a space complexity of $O(N)$.

    Thus, the total space complexity is $O(N \cdot L)$

---

### Approach 3: Using Trie

#### Intuition

A Trie is well-suited for this problem because it allows us to build folder paths incrementally, marking endpoints where folders end. With this structure, any folder that tries to extend beyond an endpoint can be identified as a sub-folder.

We start with an empty Trie and insert folder paths by splitting each path into its components (e.g., `"/a/b/c"` becomes `["a", "b", "c"]`). As we insert each part, we check if we’ve reached an endpoint in the Trie. If so, we can skip the current folder as it’s a sub-folder. Otherwise, we continue inserting the remaining parts. At the end of each path, we mark it as an endpoint.

This way, any future folder that follows an existing path will encounter the endpoint, confirming it as a sub-folder. This is extremely effective for handling deeply nested folder structures.

#### Algorithm

- Define a `TrieNode` class with:
  - A boolean `isEndOfFolder` to indicate if the node marks the end of a folder.
  - A map called `children` to store child folder nodes.

- Create a `TrieNode` root in the `Solution` class to start building the Trie.

- The `removeSubfolders` method:
  - For each folder path in `folder`:
    - Split the path into folder names using `/` as the delimiter.
    - Start from the root node and traverse through the folder names:
      - For each folder, if it is not an empty string:
        - If the current folder does not exist in the children, add it as a new `TrieNode`.
        - Move to the child node corresponding to the current folder.
    - Mark the last node of the path as `isEndOfFolder = true`.

- Initialize an empty array called `result` to store non-sub-folder paths.

- For each folder path in `folder` again:
  - Split the path into folder names.
  - Initialize a boolean `isSubfolder` to `false` to track if the current path is a sub-folder.
  - Start from the root node and traverse through the folder names:
    - For each folder, if it is not an empty string:
      - Retrieve the next node corresponding to the current folder name.
      - If `nextNode.isEndOfFolder` is `true` and it is not the last folder in the path, mark `isSubfolder` as `true` and break the loop.
    - If the path is not a sub-folder, add it to `result`.

- Return `result`, which contains only the top-level folders (non-sub-folders).

#### Implementation

<iframe src="https://leetcode.com/playground/ArGwbzYZ/shared" frameBorder="0" width="100%" height="500" name="ArGwbzYZ"></iframe>

#### Complexity Analysis

Let $N$ be the number of folders and $L$ be the maximum length of a folder path.

- Time complexity: $O(N \times L)$

    For each folder path in `folderPaths`, the algorithm parses the path and inserts it into the Trie. Parsing each path takes $O(L)$ time.
    
    For each segment, checking and inserting into Trie’s map also takes $O(L)$ time on average due to hash table operations (insertions and lookups in the map). Therefore, building the Trie for all $N$ paths results in a total time complexity of $O(N \times L)$.

    For each folder path, the algorithm traverses the Trie to check if it is a subfolder. Again, parsing the path takes $O(L)$, and each lookup in the map takes $O(1)$ on average. Therefore, checking all $N$ folder paths also requires $O(N \times L)$ time.

    Overall, both the Trie-building and subfolder-checking phases have a time complexity of $O(N \times L)$, so the total time complexity is: $O(N \times L)$

- Space complexity: $O(N \times L)$
    
    Each folder path can create up to $L$ nodes in the Trie, depending on the path depth. In the worst case, if all folder paths are unique, we would end up storing all $N \times L$ segments. Therefore, the space required for the Trie structure is $O(N \times L)$.

    The `result` array stores up to $N$ folder paths, so its space requirement is $O(N)$. Intermediate variables like `iss` and `string` use $O(L)$ space for each folder path.
   
    Since the Trie is the most space-consuming data structure in this solution, the overall space complexity is: $O(N \times L)$

---