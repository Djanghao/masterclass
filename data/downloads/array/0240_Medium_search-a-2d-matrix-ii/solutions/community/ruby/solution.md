# 4 lines C, 6 lines Ruby, 7 lines Python, 1-liners

**Author:** StefanPochmann
**Votes:** 77
**Link:** [https://leetcode.com/problems/search-a-2d-matrix-ii/solutions/66168/](https://leetcode.com/problems/search-a-2d-matrix-ii/solutions/66168/)

---

Same O(m+n) method as most, just a bit different style/languages.

---

**C**

Check the top-right corner. If it's not the target, then remove the top row or rightmost column.

    bool searchMatrix(int** A, int m, int n, int target) {
        int x = ~target;
        while (m && n && (x = A[0][n-1]) != target)
            x < target ? A++, m-- : n--;
        return x == target;
    }

**Ruby**

    def search_matrix(matrix, target)
        j = -1
        matrix.each { |row|
            j -= 1 while row[j] && row[j] > target
            return true if row[j] == target
        }
        false
    end

**Python**

    def searchMatrix(self, matrix, target):
        j = -1
        for row in matrix:
            while j + len(row) and row[j] > target:
                j -= 1
            if row[j] == target:
                return True
        return False

**1-liners**

Relax, I know they're O(mn). This is just for fun (although they did get accepted):

Python (204 ms):

    def searchMatrix(self, matrix, target):
        return any(target in row for row in matrix)

Ruby (828 ms):

    def search_matrix(matrix, target)
        matrix.any? { |row| row.include? target }
    end