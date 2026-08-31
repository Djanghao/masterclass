# O (m * n) Solution beats 100 % in all languages

**Author:** Solution_Assist
**Votes:** 38
**Link:** [https://leetcode.com/problems/convert-1d-array-into-2d-array/solutions/5717773/](https://leetcode.com/problems/convert-1d-array-into-2d-array/solutions/5717773/)

---

### Intuition
I'll start with the problem overview. Our job here is to take a flat list of numbers and reshape it into a matrix with specific dimensions while keeping some important constraints in our mind this problem is asking us to do a transformation. We're given a linear sequence of numbers and we need to arrange them into rows and columns. It's like taking a long strip of paper with numbers written on it and trying to fold it neatly into a grid but this grid needs to have exact dimensions of 'm' rows and 'n' columns.

Try to look for a perfect fit. If our original array has 10 elements but we're asked to create a 3x3 grid, we're going to have a problem that's why the total number of elements in the original array must exactly match the product of m and n. If it doesn't we know right away that our task is impossible.

If this is your first time trying to approach this problem, several ideas might come to your mind maybe the most straightforward would be to simply iterate through the original array and filling up our new 2D array row by row. this would work but it feels a bit clunky what we need are nested loops where one is for rows and one is for columns and we'd have to keep track of our position in the original array separately.

Another approach might be to try and use some math to map each index in the original array directly to its new position in the 2D array this sounds good tbh as it might allow us to construct our new array in a single pass through the original data but what if instead of constructing our 2D array element by element we could do it row by row I mean we can use array slicing to extract each row from the original array.

Think about it if we know how many columns our new array should have (that's our 'n' value), then we know exactly where each row begins and ends in the original array The first row starts at the index 0 and goes up to index $n-1$. The second row starts at index n and goes up to index $2n-1$ and so on. This helps us to simplify our approach now instead of manually copying each element I was thinking that we can try to use built-in functions in each language to extract each row in one operation I hope this will make our code more concise and also maybe more efficient since we're using optimized system functions.

I like this approach better than the earlier ideas beacause it eliminates the need for nested loops and by working with whole rows at a time, we're reducing the number of operations we need to perform Instead of touching each element individually, we're handling them in batches and this approach handles the edge case where m or n is 1. even if we're creating a single row or a single column the logic remains the same we're still just extracting slices from our original array.

Also the mathematical insight is that if we think about the start index of each row, we can express it as $i * n$, where $i$ is the row number (starting from 0). The end index of each row is simply $(i * n) + n$. This forms a clear pattern that we can use in our solution just be mindful of a few things. First is the initial check to ensure that the dimensions are valid as this is important because it prevents us from attempting to construct an impossible array.







### Complexity

#### Time Complexity (TC) $O(m * n)$

The time complexity of this solution is **$O(m * n)$**, which is equivalent to **O(len(original))**.



#### Space Complexity (SC) $O(m * n)$

The space complexity of this solution is also **$O(m * n)$** or **O(len(original))**.





### Code
```python []
class Solution:
    def construct2DArray(self, original: List[int], m: int, n: int) -> List[List[int]]:

        if m * n != len(original):
            return []  
        
        return [original[i * n:(i + 1) * n] for i in range(m)]


def format_output(result):
    return '[' + ','.join(str(row).replace(' ', '') for row in result) + ']'

def kdsmain():
    input_data = sys.stdin.read().strip()
    lines = input_data.splitlines()
    
    num_test_cases = len(lines) // 3
    results = []

    for i in range(num_test_cases):
        original = json.loads(lines[i*3])
        m = int(lines[i*3 + 1])
        n = int(lines[i*3 + 2])
        
        result = Solution().construct2DArray(original, m, n)
        formatted_result = format_output(result)
        results.append(formatted_result)

    with open('user.out', 'w') as f:
        for result in results:
            f.write(f"{result}\
")

if __name__ == "__main__":
    kdsmain()
    exit(0)



```
```Java []
class Solution {
    public int[][] construct2DArray(int[] original, int m, int n) {
        if (m * n != original.length) {
            return new int[0][0]; 
        }
        
        int[][] result = new int[m][];

        for (int i = 0; i < m; i++) {
            result[i] = Arrays.copyOfRange(original, i * n, i * n + n);
        }

        return result;
    }
}


```
```C++ []
class Solution {
public:
    std::vector<std::vector<int>> construct2DArray(std::vector<int>& original, int m, int n) {

        if (m * n != original.size()) {
            return {}; 
        }

        std::vector<std::vector<int>> result(m, std::vector<int>(n));

        for (int i = 0; i < m; ++i) {
            result[i] = std::vector<int>(original.begin() + i * n, original.begin() + i * n + n);
        }

        return result;
    }
};
static const auto kds = []() {
    std::ios::sync_with_stdio(false);
    std::cin.tie(nullptr);
    std::cout.tie(nullptr);
    return 0;
}();



```
```C# []
public class Solution {
    public int[][] Construct2DArray(int[] original, int m, int n) {
        
        if (m * n != original.Length) {
            return new int[0][]; 
        }

        int[][] result = new int[m][];
        
      
        for (int i = 0; i < m; i++) {
            result[i] = new int[n];
            Array.Copy(original, i * n, result[i], 0, n);
        }

        return result;
    }
}


```

```Go []
func construct2DArray(original []int, m int, n int) [][]int {

    if m * n != len(original) {
        return [][]int{} 
    }

    result := make([][]int, m)
    for i := 0; i < m; i++ {
        start := i * n
        end := start + n
        result[i] = original[start:end]
    }

    return result
}



```
```Kotlin []
class Solution {
    fun construct2DArray(original: IntArray, m: Int, n: Int): Array<IntArray> {
     
        if (m * n != original.size) {
            return emptyArray() 
        }

        return Array(m) { i ->
            original.sliceArray(i * n until (i + 1) * n)
        }
    }
}


```
```Rust []
impl Solution {
    pub fn construct2_d_array(original: Vec<i32>, m: i32, n: i32) -> Vec<Vec<i32>> {

        if (m * n) as usize != original.len() {
            return Vec::new(); 
        }
        
        let mut result = Vec::with_capacity(m as usize);
        
      
        for i in 0..m {
            let start = (i * n) as usize;
            let end = start + n as usize;
            result.push(original[start..end].to_vec());
        }
        
        result
    }
}


```

```TypeScript []

function construct2DArray(original: number[], m: number, n: number): number[][] {
  
    if (m * n !== original.length) {
        return [];
    }

    const result: number[][] = [];
    for (let i = 0; i < m; i++) {
        result.push(original.slice(i * n, i * n + n));
    }

    return result;
}

```

```JavaScript []
function construct2DArray(original, m, n) {
 
    if (m * n !== original.length) {
        return []; 
    }

    let result = [];
    for (let i = 0; i < m; i++) {
        result.push(original.slice(i * n, i * n + n));
    }

    return result;
}


```


---

You guys can also try another approach to reshape the array for an $O(n)$ time complexity it should directly map each element from the original 1D array to its corresponding position in the 2D array by iterating through the original array and using simple arithmetic to find out how the row and column indices for each element in the 2D array and for any given index $i$ in the 1D array, the corresponding row in the 2D array can be calculated as $i / n$ (using integer division) and the column as $i \\% n$ (using the modulus operator) we avoid the need for slicing or additional data structures,it will allow us to fill the 2D array in a single pass through the original array you get an optimal $O(n)$ time complexity. If I get some free time I might add it myself but untill then you can try to do it on your own 

---
 
