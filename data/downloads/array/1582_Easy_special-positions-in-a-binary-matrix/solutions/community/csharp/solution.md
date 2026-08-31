# 🚀🚀🚀EASY SOLUTiON EVER !!! || Java || C++ || Python || JS || C# || Ruby || Go 🚀🚀🚀 by PRODONiK

**Author:** prodonik
**Votes:** 17
**Link:** [https://leetcode.com/problems/special-positions-in-a-binary-matrix/solutions/4397449/](https://leetcode.com/problems/special-positions-in-a-binary-matrix/solutions/4397449/)

---

# Intuition
The problem aims to find the number of special positions in a given matrix. A position is considered special if the element at that position is 1, and there is no other 1 in the same row and the same column.

# Approach
The `numSpecial` method iterates over each row in the matrix. For each element with the value 1 in the row, it increments the `ones_in_the_row` variable, indicating the number of 1s in that row. If it's the first 1 in the row (`ones_in_the_row == 1`), it marks the corresponding column as potentially special. If it's not the first 1 in the row (`ones_in_the_row > 1`), it marks both the current and the previously marked columns as non-special.

The `columns` array is used to keep track of the status of each column:
- `0`: Not marked
- `1`: Potentially special (first 1 in the row)
- `2`: Not special (more than one 1 in the row)

After processing all rows, the method counts the columns marked as potentially special and returns the result.

# Complexity
- Time complexity: O(m * n)
  The time complexity is linear in the size of the matrix, where `m` is the number of rows and `n` is the number of columns.

- Space complexity: O(n)
  The space complexity is linear in the number of columns, as the `columns` array is used to keep track of the status of each column.

# Code
```Java []
class Solution {
    public int numSpecial (int[][] nums) {
        int result = 0;
        int [] columns = new int [nums[0].length];
        for (int i = 0; i < nums.length; i ++) {
            int ones_in_the_row = 0;
            int column = 0;
            for (int j = 0; j < nums[i].length; j ++) {
                if (nums[i][j] == 1) {
                    ones_in_the_row ++;
                    if (ones_in_the_row == 1) {
                        columns[j] = columns[j] == 0 ? 1 : 2;
                        column = j;
                    }
                    else {
                        columns[column] = 2;
                        columns[j] = 2;
                    }
                }
            }

        }
        for (int column : columns) {
            result += (column == 1 ? 1 : 0);
        }
        return result;
    }
}
```
```C++ []
class Solution {
public:
    int numSpecial(std::vector<std::vector<int>>& nums) {
        int result = 0;
        std::vector<int> columns(nums[0].size(), 0);

        for (int i = 0; i < nums.size(); ++i) {
            int ones_in_the_row = 0;
            int column = 0;

            for (int j = 0; j < nums[i].size(); ++j) {
                if (nums[i][j] == 1) {
                    ones_in_the_row++;

                    if (ones_in_the_row == 1) {
                        columns[j] = columns[j] == 0 ? 1 : 2;
                        column = j;
                    } else {
                        columns[column] = 2;
                        columns[j] = 2;
                    }
                }
            }
        }

        for (int column : columns) {
            result += (column == 1 ? 1 : 0);
        }

        return result;
    }
};
```
```Python []
class Solution:
    def numSpecial(self, nums: List[List[int]]) -> int:
        result = 0
        columns = [0] * len(nums[0])

        for i in range(len(nums)):
            ones_in_the_row = 0
            column = 0

            for j in range(len(nums[i])):
                if nums[i][j] == 1:
                    ones_in_the_row += 1

                    if ones_in_the_row == 1:
                        columns[j] = 1 if columns[j] == 0 else 2
                        column = j
                    else:
                        columns[column] = 2
                        columns[j] = 2

        result += sum(column == 1 for column in columns)
        return result
```
```JavaScript []
class Solution {
    numSpecial(nums) {
        let result = 0;
        const columns = new Array(nums[0].length).fill(0);

        for (let i = 0; i < nums.length; ++i) {
            let ones_in_the_row = 0;
            let column = 0;

            for (let j = 0; j < nums[i].length; ++j) {
                if (nums[i][j] === 1) {
                    ones_in_the_row++;

                    if (ones_in_the_row === 1) {
                        columns[j] = columns[j] === 0 ? 1 : 2;
                        column = j;
                    } else {
                        columns[column] = 2;
                        columns[j] = 2;
                    }
                }
            }
        }

        result += columns.filter(column => column === 1).length;
        return result;
    }
}
```
```C# []
public class Solution {
    public int NumSpecial(int[][] nums) {
        int result = 0;
        int[] columns = new int[nums[0].Length];

        for (int i = 0; i < nums.Length; ++i) {
            int ones_in_the_row = 0;
            int column = 0;

            for (int j = 0; j < nums[i].Length; ++j) {
                if (nums[i][j] == 1) {
                    ones_in_the_row++;

                    if (ones_in_the_row == 1) {
                        columns[j] = columns[j] == 0 ? 1 : 2;
                        column = j;
                    } else {
                        columns[column] = 2;
                        columns[j] = 2;
                    }
                }
            }
        }

        result += Array.FindAll(columns, column => column == 1).Length;
        return result;
    }
}
```
```Ruby []
class Solution
  def num_special(nums)
    result = 0
    columns = Array.new(nums[0].length, 0)

    (0...nums.length).each do |i|
      ones_in_the_row = 0
      column = 0

      (0...nums[i].length).each do |j|
        if nums[i][j] == 1
          ones_in_the_row += 1

          if ones_in_the_row == 1
            columns[j] = columns[j] == 0 ? 1 : 2
            column = j
          else
            columns[column] = 2
            columns[j] = 2
          end
        end
      end
    end

    result += columns.count { |column| column == 1 }
    result
  end
end
```
```Go []
type Solution struct{}

func (s *Solution) NumSpecial(nums [][]int) int {
	result := 0
	columns := make([]int, len(nums[0]))

	for i := 0; i < len(nums); i++ {
		ones_in_the_row := 0
		column := 0

		for j := 0; j < len(nums[i]); j++ {
			if nums[i][j] == 1 {
				ones_in_the_row++

				if ones_in_the_row == 1 {
					if columns[j] == 0 {
						columns[j] = 1
					} else {
						columns[j] = 2
					}
					column = j
				} else {
					columns[column] = 2
					columns[j] = 2
				}
			}
		}
	}

	for _, column := range columns {
		if column == 1 {
			result++
		}
	}

	return result
}
```
![image.png](./images/0.png)
