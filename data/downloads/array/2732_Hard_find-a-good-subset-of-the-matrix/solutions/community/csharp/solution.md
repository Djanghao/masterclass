# C# Bitmask + Proof

**Author:** gary3219
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-a-good-subset-of-the-matrix/solutions/3623602/](https://leetcode.com/problems/find-a-good-subset-of-the-matrix/solutions/3623602/)

---

![f3da718b55ccc1ed3494e6615f1db496fd70b0ad.png](./images/0.png){:width = 500; align=center}



# Intuition
The very first intuition is that when we are considering about this question, it is $$\\sout{obvious}$$ that every valid solution is built from 0 row to 1 row, then from 1 row to 2 rows and so on, which after some tries we could find that every valid solution satisfies a two-rows approach, or in other words if and only if there are two rows that could satisfies what the question said, then there will be a solution.

# Proof
1. There is no row with 0 and 1
Proof: If it exists, it is not handed in to find another

2. There is no row with 1
Proof: If it exists, since any two are intersected, this column is all 1, obviously there is no solution

2. There are no rows with 2 1s
Proof: Suppose the length of this line is like this: 11000, then the other lines are either 10xxx, 01xxx, or 11xxx. It is easy to see that no matter how you choose, the first two columns cannot meet the requirements

Then all rows have at least 3 1s.

As the question said, every column can have at most $$\\frac{m}{2}$$ 1s, so $$\\sum_{m}^{i=0} column_i$$ = 2.5m 1s, but as we initially got 3 1s, it is contradictory.

Q.E.D

# Complexity
$$O(n + m^5)$$

# Code
```
public class Solution {
    public IList<int> GoodSubsetofBinaryMatrix(int[][] grid) {
        int n = grid.Length, m = grid[0].Length;
        Dictionary<string, int> map = new();
        string str = "";
        for(int i = 0; i < m; i++) str += 0;
        for(int i = 0; i < n; i++){
            string s = "";
            for(int j = 0; j < m; j++) s += grid[i][j];
            map[s] = i; //pre-process and store the value of each row in a string, and put it into a map
        }
        if(map.ContainsKey(str)) return new List<int>(new int[]{map[str]}); //pre-process corner case all 0s

        //three for loops below is to iterate over all the possible combinations of valid strings
        //if m == 1, then only "0" satisfies
        //if m == 2, it can be ("00", "01"), ("00", "10") or so, which when they add up they will form "01" and "10" respectively, still, the sum of each column is less then 2 / 2 = 1
        //if m == 3, it can be ("001", "110"), ("010", "100"), ("001", "100") or so,  as i != 0 && (i ^ j) != 0 (every column sum in a good subset does not exceed 1) then the question will be satisfied
        //if m == 4, it can be("0100", "0010"), ("1100", "0011"), ("1000", "0001") and so on
        //if m == 5, if can be("00100", "11000"), ("01100", "00001"), ("11010", "00101") and so on

        for(int i = 0; i < 1 << m; i++){ //bitmask, it will cover all the possible combinations for each string
            for(int j = 0; j < 1 << m; j++){
                int bit = 0;
                for(int k = 0; k < m; k++){
                    if(((i >> k) & 1) == 1 && (((j >> k) & 1) == 1)) bit += 114514; //two 1's in the same column, just add some random numbers to eliminate this combination in the next conditional
                    else bit += 1;
                } //if there are two 1's in the same column, condition does not match
                if(bit <= m){ //if the combination satisfies that the sum of each column is satisfied, then check whether the map contains these two strings or not
                    string s1 = Convert.ToString(i, 2), s2 = Convert.ToString(j, 2);
                    while(s1.Length != m) s1 = "0" + s1;
                    while(s2.Length != m) s2 = "0" + s2; //fill the 0s until it has the same length as m
                    if(map.ContainsKey(s1) && map.ContainsKey(s2)){ //if it does, then return (remember to sort it)
                        List<int> ysy = new(new int[]{map[s1], map[s2]});
                        ysy.Sort();
                        return ysy;
                    }
                }
            }
        }
        return new List<int>();
    }
}
```