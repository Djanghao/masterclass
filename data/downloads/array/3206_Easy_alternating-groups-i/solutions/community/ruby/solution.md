# O(n), O(1). Simple Loop

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/alternating-groups-i/solutions/5447102/](https://leetcode.com/problems/alternating-groups-i/solutions/5447102/)

---


# Code
```
# @param {Integer[]} colors
# @return {Integer}
def number_of_alternating_groups(colors)
    three_colors = []
    i = 0
    answer = 0
    while i < colors.size
        three_colors << colors[i]

        if three_colors.size > 3
            three_colors.shift
        end

        if three_colors.size == 3
            if three_colors[0] != three_colors[1] and three_colors[1] != three_colors[2]
                answer += 1
            end
        end

        i += 1
    end

    # We go over index 0 and 1 again because of the possiblity 
    # of colors[-2], colors[-1], and colors[0] making an
    # alternating combo. Same for colors[-1], colors[0] 
    # and colors[1].

    # Shift over going over index 0.
    three_colors.shift
    three_colors << colors[0]
    if three_colors[0] != three_colors[1] and three_colors[1] != three_colors[2]
        answer += 1
    end
    
    # Shift over going over index 1.
    three_colors.shift
    three_colors << colors[1]
    if three_colors[0] != three_colors[1] and three_colors[1] != three_colors[2]
        answer += 1
    end

    answer
end
```