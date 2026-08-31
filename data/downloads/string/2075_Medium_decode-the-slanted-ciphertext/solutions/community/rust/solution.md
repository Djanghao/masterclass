# rust - translating (x,y) coors to a 1d index

**Author:** tjstinso
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-the-slanted-ciphertext/solutions/2989033/](https://leetcode.com/problems/decode-the-slanted-ciphertext/solutions/2989033/)

---

# Intuition and Approach
This is a fairly simple diagonal traversal solution. The examples paint things pretty clearly such that we may just follow the arrows to a satisfactory solution. Basically we want a simple loop over a 2 dimensional cipher like this:

`cipher[j][i+j] for i in 0..columns for j in 0..rows if i + j < columns`

Instead of building the cipher as a matrix, we may index into our string directly by simply translating matrix indices to an integer. This is a straight forward translation:

```
[y][x] == num_columns * y + x 
# or in a more complete, algorithmic form
[encoded_text[j * columns + j + i] for i in range(columns) for j in range(rows) if i + j < columns]
```

# Complexity
- Time complexity:
`O(n)`

- Space complexity:
`O(n)`

# Code
```
impl Solution {
    pub fn decode_ciphertext(encoded_text: String, rows: i32) -> String {
        let len = encoded_text.len() / (rows as usize);
        let encoded_text = encoded_text.chars().collect::<Vec<char>>();
        let mut output = String::from("");
        for i in 0..len {
            let mut x = i;
            let mut y = 0;
            while y < rows as usize && x < len {
                output.push(encoded_text[len * y + x]);
                y += 1;
                x += 1;
            }
        }

        String::from(output.trim_end())
    }
}

```