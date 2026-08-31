# Easy Swift Solution with Time Complexity O(N) and Space Complexity O(1)

**Author:** debashishdash03
**Votes:** 0
**Link:** [https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/solutions/5790810/](https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/solutions/5790810/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
/**
 * The read4 API is defined in the parent class Reader4.
 *     func read4(_ buf4: inout [Character]) -> Int;
 */

class Solution : Reader4 {
	/**
     * @param buf Destination buffer
     * @param n   Number of characters to read
     * @return    The number of actual characters read
     */
    // Declare an internal buffer that stores up to 4 characters, initialized with null characters.
    private var internalBuffer: [Character] = Array(repeating: "\\0", count: 4)
    
    // Tracks the current position within the internal buffer.
    private var bufferIndex = 0
    
    // Tracks how many characters have been read into the internal buffer (returned by `read4`).
    private var bufferCount = 0 
    
    func read(_ buf: inout [Character], _ n: Int) -> Int {
        // Initialize a counter to keep track of the total number of characters copied into `buf`.
        var totalRead = 0
    
        // Loop until we have read `n` characters or there are no more characters to read.
        while totalRead < n {
            
            // If the internal buffer is empty (or fully consumed), refill it by calling `read4`.
            if bufferIndex == bufferCount {
                
                // Call `read4`, which reads up to 4 characters from the data source into           `internalBuffer`.
                // Store the number of characters actually read into `bufferCount`.
                bufferCount = read4(&internalBuffer)
                
                // Reset `bufferIndex` to 0 since we are starting from the beginning of the internal buffer.
                bufferIndex = 0
            
                // If `read4` returns 0, it means there are no more characters to read from the data source.
                if bufferCount == 0 {
                    break
                }
            }
        
            
            // Calculate how many characters to copy in this iteration.
            // The number to read is the smaller of the remaining characters requested (`n - totalRead`)
            // and the remaining characters in the internal buffer (`bufferCount - bufferIndex`).
            let toRead = min(n - totalRead, bufferCount - bufferIndex)
        
            // Loop over the `toRead` number of characters.
            for i in 0..<toRead {
                // Copy each character from the internal buffer to the output buffer `buf`.
                buf[totalRead + i] = internalBuffer[bufferIndex + i]
            }
        
            // Update counters
            totalRead += toRead
            bufferIndex += toRead
        }
        return totalRead
    }
}
```