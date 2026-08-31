# Clean image smoother

**Author:** FLlGHT
**Votes:** 12
**Link:** [https://leetcode.com/problems/image-smoother/solutions/2713364/](https://leetcode.com/problems/image-smoother/solutions/2713364/)

---

##### Java
```java
public int[][] imageSmoother(int[][] image) {
        int[][] smoother = new int[image.length][image[0].length];

        for (int row = 0; row < smoother.length; ++row)
            for (int column = 0; column < smoother[0].length; ++column)
                smoother[row][column] = surroundingFloor(image, row, column);

        return smoother;
    }

    private int surroundingFloor(int[][] image, int row, int column) {
        int count = 0, sum = 0;

        for (int rowDifference = -1; rowDifference <= 1; ++rowDifference) {
            for (int columnDifference = -1; columnDifference <= 1; ++columnDifference) {
                int newRow = row + rowDifference, newColumn = column + columnDifference;

                if (newRow >= 0 && newRow < image.length && newColumn >= 0 && newColumn < image[0].length) {
                    sum += image[newRow][newColumn];
                    count++;
                }
            }
        }

        return (int) Math.floor(sum * 1.00 / count);
    }
```

##### C++
```c++
public:
    vector<vector<int>> imageSmoother(vector<vector<int>> &image) {
        vector<vector<int>> smoother(image.size(), vector<int>(image[0].size()));

        for (int row = 0; row < smoother.size(); ++row)
            for (int column = 0; column < smoother[0].size(); ++column)
                smoother[row][column] = surroundingFloor(image, row, column);

        return smoother;
    }

private:
    int surroundingFloor(vector<vector<int>> &image, int row, int column) {
        int count = 0, sum = 0;

        for (int rowDifference = -1; rowDifference <= 1; ++rowDifference) {
            for (int columnDifference = -1; columnDifference <= 1; ++columnDifference) {
                int newRow = row + rowDifference, newColumn = column + columnDifference;

                if (newRow >= 0 && newRow < image.size() && newColumn >= 0 && newColumn < image[0].size()) {
                    sum += image[newRow][newColumn];
                    count++;
                }
            }
        }

        return (int) floor(sum * 1.00 / count);
    }
```