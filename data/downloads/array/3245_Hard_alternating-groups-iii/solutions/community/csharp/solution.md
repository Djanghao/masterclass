# Efficiently C# Bit Manipulation and Custom Data Structures

**Author:** Weberkx3
**Votes:** 0
**Link:** [https://leetcode.com/problems/alternating-groups-iii/solutions/5620618/](https://leetcode.com/problems/alternating-groups-iii/solutions/5620618/)

---

# Intuition
The problem involves handling alternating groups in a circular array. The first query type requires counting alternating groups of a specific size, while the second query type involves updating the color of a tile. Given the circular nature of the problem and the potentially large size of the array, a direct approach would be inefficient. Instead, we can use an advanced data structure like a segment tree or a customized bit manipulation technique to efficiently manage and query the alternating groups.

# Approach
1.Representation and Transformation: We start by transforming the original colors array into a new array c where the value at each position is XORed based on whether its index is even or odd. This transformation helps in identifying alternating groups more effectively.

2.Data Structures: We use a custom data structure, LST, to efficiently manage and query the positions of transitions between different colors. This allows us to quickly find the start and end of alternating groups.

3.Processing Queries:

For the first query type ([1, sizei]), we count the number of alternating groups of the specified size by traversing the positions of transitions.

For the second query type ([2, indexi, colori]), we update the color at the specified index and adjust the internal data structures to reflect this change.

4.Circular Handling: Since the array is circular, special attention is given to handle the wrap-around between the last and first elements.

# Complexity
- Time complexity:
The time complexity for processing each query depends on the operations performed by the LST class. In the worst case, each operation (such as updating or querying) takes $$O(log N)$$.

- Space complexity:
The space complexity is dominated by the size of the LST data structures and the auxiliary arrays, leading to a space complexity of $$O(n)$$, where n is the size of the colors array.

# Code
```
public class Solution { // Define the Solution class
    public List<int> NumberOfAlternatingGroups(int[] colors, int[][] queries) { // Define the NumberOfAlternatingGroups function that takes two parameters colors and queries, and returns a List<int>
        int n = colors.Length; // Get the length of the colors array and store it in n
        int[] c = new int[2 * n]; // Create a new array c with length 2 * n
        for (int i = 0; i < 2 * n; i++) { // Loop from 0 to 2 * n
            c[i] = colors[i % n] ^ (i % 2 == 0 ? 0 : 1); // Store the XOR result of colors based on whether the index i is even or odd into c
        }

        LST lst = new LST(2 * n + 3); // Create an instance of the LST class with size 2 * n + 3
        for (int i = 1; i < 2 * n; i++) { // Loop from 1 to 2 * n
            if (c[i] != c[i - 1]) { // If the consecutive elements in c are different
                lst.SetPosition(i); // Set the bit at position i in lst
            }
        }

        int[] fs = new int[2 * n + 1]; // Create a new array fs with length 2 * n + 1
        LST ff = new LST(2 * n + 1); // Create an instance of the LST class with size 2 * n + 1
        for (int i = 0; i < n; i++) { // Loop from 0 to n
            if (lst.Get(i)) { // If the bit at position i in lst is set
                int ne = lst.Next(i + 1); // Get the next set bit in lst starting from i + 1
                if (ne == -1) ne = 2 * n; // If ne is -1, set ne to 2 * n
                fs[ne - i]++; // Increment the value in fs at index ne - i
                ff.SetPosition(ne - i); // Set the bit at position ne - i in ff
            }
        }

        List<int> ans = new List<int>(); // Create a List<int> to store the answers
        foreach (var q in queries) { // Iterate through each query in queries
            if (q[0] == 1) { // If the first element of the query is 1
                if (lst.Next(0) == -1) { // If there is no set bit in lst starting from 0
                    ans.Add(n); // Add n to the answer
                } else {
                    int lans = 0; // Initialize the local variable lans to 0
                    for (int i = ff.Next(q[1]); i != -1; i = ff.Next(i + 1)) { // Iterate through all set bits in ff starting from q[1]
                        lans += (i - q[1] + 1) * fs[i]; // Calculate and increment the value of lans
                    }
                    if (c[2 * n - 1] != c[0]) { // If the last element of c is different from the first element
                        int f = lst.Next(0); // Get the next set bit in lst starting from 0
                        if (f >= q[1]) { // If f is greater than or equal to q[1]
                            lans += (f - q[1] + 1); // Increment the value of lans
                        }
                    }
                    ans.Add(lans); // Add lans to the answer
                }
            } else {
                int ind = q[1], val = q[2]; // Get the second and third elements of the query
                if (colors[ind] == val) continue; // If the value in colors at index ind is equal to val, skip this iteration
                colors[ind] ^= 1; // Perform an XOR operation on the value in colors at index ind
                Go(ind, lst, fs, n, ff, c); // Call the Go function to process the changes
                Go(ind + n, lst, fs, n, ff, c); // Call the Go function to process the changes
            }
        }
        return ans; // Return the answer
    }

    private void Go(int ind, LST lst, int[] fs, int n, LST ff, int[] c) { // Define the private Go function that takes multiple parameters
        if (ind > 0) { // If ind is greater than 0
            int pre = lst.Prev(ind - 1); // Get the previous set bit in lst starting from ind - 1
            int nex = lst.Next(pre + 1); // Get the next set bit in lst starting from pre + 1
            if (nex == -1) nex = 2 * n; // If nex is -1, set nex to 2 * n
            if (pre != -1 && pre < n && --fs[nex - pre] == 0) { // If pre is not -1, less than n, and decrementing fs at index nex - pre results in 0
                ff.UnsetPosition(nex - pre); // Unset the bit at position nex - pre in ff
            }
        }
        if (lst.Get(ind)) { // If the bit at position ind in lst is set
            int pre = ind; // Set pre to ind
            int nex = lst.Next(ind + 1); // Get the next set bit in lst starting from ind + 1
            if (nex == -1) nex = 2 * n; // If nex is -1, set nex to 2 * n
            if (pre != -1 && pre < n && --fs[nex - pre] == 0) { // If pre is not -1, less than n, and decrementing fs at index nex - pre results in 0
                ff.UnsetPosition(nex - pre); // Unset the bit at position nex - pre in ff
            }
        }
        if (lst.Get(ind + 1)) { // If the bit at position ind + 1 in lst is set
            int pre = ind + 1; // Set pre to ind + 1
            int nex = lst.Next(ind + 2); // Get the next set bit in lst starting from ind + 2
            if (nex == -1) nex = 2 * n; // If nex is -1, set nex to 2 * n
            if (pre != -1 && pre < n && --fs[nex - pre] == 0) { // If pre is not -1, less than n, and decrementing fs at index nex - pre results in 0
                ff.UnsetPosition(nex - pre); // Unset the bit at position nex - pre in ff
            }
        }
        lst.UnsetPosition(ind); // Unset the bit at position ind in lst
        lst.UnsetPosition(ind + 1); // Unset the bit at position ind + 1 in lst
        c[ind] ^= 1; // Perform an XOR operation on the value in c at position ind
        if (ind > 0 && c[ind] != c[ind - 1]) { // If ind is greater than 0 and the value in c at position ind is different from the value at ind - 1
            lst.SetPosition(ind); // Set the bit at position ind in lst
        }
        if (ind + 1 < c.Length && c[ind + 1] != c[ind]) { // If ind + 1 is less than the length of c and the value in c at position ind + 1 is different from the value at ind
            lst.SetPosition(ind + 1); // Set the bit at position ind + 1 in lst
        }

        if (ind > 0) { // If ind is greater than 0
            int pre = lst.Prev(ind - 1); // Get the previous set bit in lst starting from ind - 1
            int nex = lst.Next(pre + 1); // Get the next set bit in lst starting from pre + 1
            if (nex == -1) nex = 2 * n; // If nex is -1, set nex to 2 * n
            if (pre != -1 && pre < n && ++fs[nex - pre] == 1) { // If pre is not -1, less than n, and incrementing fs at index nex - pre results in 1
                ff.SetPosition(nex - pre); // Set the bit at position nex - pre in ff
            }
        }
        if (lst.Get(ind)) { // If the bit at position ind in lst is set
            int pre = ind; // Set pre to ind
            int nex = lst.Next(ind + 1); // Get the next set bit in lst starting from ind + 1
            if (nex == -1) nex = 2 * n; // If nex is -1, set nex to 2 * n
            if (pre != -1 && pre < n && ++fs[nex - pre] == 1) { // If pre is not -1, less than n, and incrementing fs at index nex - pre results in 1
                ff.SetPosition(nex - pre); // Set the bit at position nex - pre in ff
            }
        }
        if (lst.Get(ind + 1)) { // If the bit at position ind + 1 in lst is set
            int pre = ind + 1; // Set pre to ind + 1
            int nex = lst.Next(ind + 2); // Get the next set bit in lst starting from ind + 2
            if (nex == -1) nex = 2 * n; // If nex is -1, set nex to 2 * n
            if (pre != -1 && pre < n && ++fs[nex - pre] == 1) { // If pre is not -1, less than n, and incrementing fs at index nex - pre results in 1
                ff.SetPosition(nex - pre); // Set the bit at position nex - pre in ff
            }
        }
    }

    public class LST { // Define the LST class
        public long[][] BitSet { get; private set; } // Define the BitSet property, a long two-dimensional array
        public int N { get; private set; } // Define the N property, an integer

        public LST(int n) { // Constructor for the LST class, takes one parameter n
            this.N = n; // Set N to n
            int d = 1; // Initialize the variable d to 1
            for (int m = n; m > 1; m >>= 6, d++) ; // Loop to calculate the value of d until m is less than or equal to 1

            BitSet = new long[d][]; // Initialize BitSet as a long two-dimensional array of length d
            for (int i = 0, m = n >> 6; i < d; i++, m >>= 6) { // Loop to initialize each element of BitSet
                BitSet[i] = new long[m + 1]; // Initialize BitSet[i] as a long array of length m + 1
            }
        }

        public LST SetRange(int r) { // Define the SetRange function, takes one parameter r
            for (int i = 0; i < BitSet.Length; i++, r = (r + 63) >> 6) { // Loop to set all bits within the range
                for (int j = 0; j < (r >> 6); j++) { // Loop to set each element in BitSet[i] to -1
                    BitSet[i][j] = -1L; // Set BitSet[i][j] to -1
                }
                if ((r & 63) != 0) BitSet[i][r >> 6] |= (1L << r) - 1; // If the lower 6 bits of r are not 0, set the corresponding bit in BitSet[i][r >> 6]
            }
            return this; // Return the current LST instance
        }

        public LST UnsetRange(int r) { // Define the UnsetRange function, takes one parameter r
            if (r >= 0) { // If r is greater than or equal to 0
                for (int i = 0; i < BitSet.Length; i++, r = (r + 63) >> 6) { // Loop to unset all bits within the range
                    for (int j = 0; j < (r + 63) >> 6; j++) { // Loop to set each element in BitSet[i] to 0
                        BitSet[i][j] = 0; // Set BitSet[i][j] to 0
                    }
                    if ((r & 63) != 0) BitSet[i][r >> 6] &= -(1L << r); // If the lower 6 bits of r are not 0, unset the corresponding bit in BitSet[i][r >> 6]
                }
            }
            return this; // Return the current LST instance
        }

        public LST SetPosition(int pos) { // Define the SetPosition function, takes one parameter pos
            if (pos >= 0 && pos < N) { // If pos is greater than or equal to 0 and less than N
                for (int i = 0; i < BitSet.Length; i++, pos >>= 6) { // Loop to set the bit corresponding to pos
                    BitSet[i][pos >> 6] |= 1L << pos; // Set the corresponding bit in BitSet[i][pos >> 6]
                }
            }
            return this; // Return the current LST instance
        }

        public LST UnsetPosition(int pos) { // Define the UnsetPosition function, takes one parameter pos
            if (pos >= 0 && pos < N) { // If pos is greater than or equal to 0 and less than N
                for (int i = 0; i < BitSet.Length && (i == 0 || BitSet[i - 1][pos] == 0L); i++, pos >>= 6) { // Loop to unset the bit corresponding to pos
                    BitSet[i][pos >> 6] &= ~(1L << pos); // Unset the corresponding bit in BitSet[i][pos >> 6]
                }
            }
            return this; // Return the current LST instance
        }

        public bool Get(int pos) { // Define the Get function, takes one parameter pos
            return pos >= 0 && pos < N && (BitSet[0][pos >> 6] << ~pos) < 0; // Return whether the bit corresponding to pos is set
        }

        public LST Toggle(int pos) { // Define the Toggle function, takes one parameter pos
            return Get(pos) ? UnsetPosition(pos) : SetPosition(pos); // Toggle the bit at pos based on whether it is set
        }

        public int Prev(int pos) { // Define the Prev function, takes one parameter pos
            for (int i = 0; i < BitSet.Length && pos >= 0; i++, pos = (pos >> 6) - 1) { // Loop to find the set bit before pos
                int pre = Prev(BitSet[i][pos >> 6], pos & 63); // Get the set bit before pos & 63 in BitSet[i][pos >> 6]
                if (pre != -1) { // If pre is not -1
                    pos = (pos >> 6 << 6) | pre; // Update the value of pos
                    while (i > 0) pos = (pos << 6) | (63 - LeadingZeros(BitSet[--i][pos])); // Update the value of pos
                    return pos; // Return pos
                }
            }
            return -1; // If not found, return -1
        }

        public int Next(int pos) { // Define the Next function, takes one parameter pos
            for (int i = 0; i < BitSet.Length && (pos >> 6) < BitSet[i].Length; i++, pos = (pos >> 6) + 1) { // Loop to find the set bit after pos
                int nex = Next(BitSet[i][pos >> 6], pos & 63); // Get the set bit after pos & 63 in BitSet[i][pos >> 6]
                if (nex != -1) { // If nex is not -1
                    pos = (pos >> 6 << 6) | nex; // Update the value of pos
                    while (i > 0) pos = (pos << 6) | TrailingZeros(BitSet[--i][pos]); // Update the value of pos
                    return pos; // Return pos
                }
            }
            return -1; // If not found, return -1
        }

        private static int Prev(long set, int n) { // Define the static private Prev function, takes a long set and an int n
            long h = set << ~n; // Calculate the value of h
            if (h == 0L) return -1; // If h is 0, return -1
            return -LeadingZeros(h) + n; // Otherwise, return -LeadingZeros(h) + n
        }

        private static int Next(long set, int n) { // Define the static private Next function, takes a long set and an int n
            long h = set >> n; // Calculate the value of h
            if (h == 0L) return -1; // If h is 0, return -1
            return TrailingZeros(h) + n; // Otherwise, return TrailingZeros(h) + n
        }

        private static int LeadingZeros(long x) { // Define the static private LeadingZeros function, takes a long x
            if (x == 0) return 64; // If x is 0, return 64
            int count = 0; // Initialize count to 0
            for (int i = 62; i >= 0; i -= 2) { // Loop to check every two bits
                if ((x & (3L << i)) == 0) { // If the two bits of x are 0
                    count += 2; // Increment count
                } else {
                    if ((x & (2L << i)) == 0) { // If the higher bit is 0
                        count++; // Increment count
                    }
                    break; // Break the loop
                }
            }
            return count; // Return count
        }

        private static int TrailingZeros(long x) { // Define the static private TrailingZeros function, takes a long x
            if (x == 0) return 64; // If x is 0, return 64
            int count = 0; // Initialize count to 0
            for (int i = 0; i < 64; i += 2) { // Loop to check every two bits
                if ((x & (3L << i)) == 0) { // If the two bits of x are 0
                    count += 2; // Increment count
                } else {
                    if ((x & (1L << i)) == 0) { // If the lower bit is 0
                        count++; // Increment count
                    }
                    break; // Break the loop
                }
            }
            return count; // Return count
        }

        public override string ToString() { // Override the ToString function
            List<int> list = new List<int>(); // Create a List<int> to store the positions of set bits
            for (int pos = Next(0); pos != -1; pos = Next(pos + 1)) { // Loop to get all the positions of set bits
                list.Add(pos); // Add pos to the list
            }
            return string.Join(", ", list); // Return the string representation of the list
        }
    }
}
```