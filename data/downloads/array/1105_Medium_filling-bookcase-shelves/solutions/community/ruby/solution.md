# Ruby DP

**Author:** roman-dubrovsky
**Votes:** 0
**Link:** [https://leetcode.com/problems/filling-bookcase-shelves/solutions/5562898/](https://leetcode.com/problems/filling-bookcase-shelves/solutions/5562898/)

---

# Approach
Bottom-Up Dynamic Programming

# Code
```
# @param {Integer[][]} books
# @param {Integer} shelf_width
# @return {Integer}

class DynamicProgremming
    attr_reader :books, :shelf_width, :solutions

    def initialize(books, shelf_width)
        @books = books
        @shelf_width = shelf_width
        @solutions = [0]
    end

    def call
        books.each.with_index do |book, i|
            width, height = book

            solutions[i+1] = solutions[i] + height
            j = i - 1

            while j>= 0 do
                width += books[j][0]
                
                if width > shelf_width
                    break
                end

                height = [height, books[j][1]].max
                solutions[i+1] = [solutions[i+1], solutions[j] + height].min

                j -= 1
            end
        end

        solutions.last
    end
end

def min_height_shelves(books, shelf_width)
    DynamicProgremming.new(books, shelf_width).call
end
```