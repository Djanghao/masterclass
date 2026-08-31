# DP Solution with Comments

**Author:** nerdylocks
**Votes:** 2
**Link:** [https://leetcode.com/problems/cinema-seat-allocation/solutions/2993982/](https://leetcode.com/problems/cinema-seat-allocation/solutions/2993982/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
It felt like a DP solution so I approached it that way. My first version was not accepted (time exceeded) because the `dp` table was not efficient.

Admittedly, I realize that this not the most optimal solution. But I thought I'd post it any way since it seems to be the only DP solution so far.

# Approach
See comments

# Code
```
# @param {Integer} n
# @param {Integer[][]} reserved_seats
# @return {Integer}

# @param {Integer} n
# @param {Integer[][]} reserved_seats
# @return {Integer}
def max_number_of_families(n, reserved_seats)
    cols = 11
    hash = Hash.new { |k, v| k[v] = [] }
    
    # group reservations by by row
    map = reserved_seats.each_with_object(hash) { |(row, seat), acc|        
        acc[row] << seat
    }

    # Greedily count rows that are completely empty (2 max per empty row)
    count = (n - map.size) * 2
    
    map.values.each do |reserved|        
        dp = Array.new(11, 1)
        dp[0] = 0
                
        reserved.each do |res|
            dp[res] = 0
        end
        # we don't care about the first and last seats
        2.upto(cols - 1) do |col|
            # nothing to look back to so skip            
            next if dp[col].nil?
            next unless col - 1 > 1

            break if col == 6 && dp[col] == 0

            # if seat 2 is reserved, we cannot consider seat 3
            if col - 1 == 2 && dp[col - 1] == 0
                dp[col] = 0
            end

            # if seat 4 is reserved, we cannot consider seat 5
            if col - 1 == 4 && dp[col - 1] == 0
                dp[col] = 0
            end

            # if seat is free add it
            if dp[col] != 0
                dp[col] += (dp[col - 1] % 4) # modulo to wrap around
            end

            if dp[col] == 4
                count += 1
            end
        end
    end    
    
    count
end
```