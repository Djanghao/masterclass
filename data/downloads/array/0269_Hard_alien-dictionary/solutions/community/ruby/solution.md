# Ruby solution

**Author:** hirens20
**Votes:** 0
**Link:** [https://leetcode.com/problems/alien-dictionary/solutions/4184181/](https://leetcode.com/problems/alien-dictionary/solutions/4184181/)

---

# Code
```
# @param {String[]} words
# @return {String}
def alien_order(words)
    in_degree = {}
    adj_list = Hash.new { |h,k| h[k] = [] }
    queue = []
    result = []

    words.each do |word| # ["wrt", "wrf", "er", "ett", "rftt"]
        word.each_char do |w|
            in_degree[w] = 0
        end
    end
    # in_degree = {"w"=>0, "r"=>0, "t"=>0, "f"=>0, "e"=>0}

    (0...words.length - 1).each do |i|
        word1 = words[i]
        word2 = words[i + 1]

        next if word1 == word2

        return '' if word1.start_with?(word2)

        min_length = [word1.length, word2.length].min

        (0...min_length).each do |j|
            c1 = word1[j]
            c2 = word2[j]
            if c1 != c2
                in_degree[c2] += 1
                adj_list[c1] << c2
                break
            end
        end
    end

    in_degree.each do |k,v|
        queue << k if v == 0
    end

    while !queue.empty?
        node = queue.pop
        result << node
        neighbors = adj_list[node]
        neighbors.each do |nei|
            in_degree[nei] -= 1
            queue << nei if in_degree[nei] == 0
        end
    end
    result.length == in_degree.length ? result.join : ''
end
```