# PHP Union Find with explanation

**Author:** crankyinmv
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-string-with-swaps/solutions/1985480/](https://leetcode.com/problems/smallest-string-with-swaps/solutions/1985480/)

---

Runtime: 377 ms, faster than 85.71% of PHP online submissions for Smallest String With Swaps.
Memory Usage: 113.6 MB, less than 100.00% of PHP online submissions for Smallest String With Swaps.

If none of the pair indices overlapped each other, this would be a very simple problem indeed.  Just compare each `s[pair[0]]` with `s[pair[1]]` and put the lexicographically smaller one first.

With overlap, any index from any pair in the overlapping group can be swapped with any other index, so we need to find each collection of overlapped groups.  Hence the Union Find.

If you're unfamiliar with Union Find, I highly recommend William Fiset's channel on YouTube.  The end result is that each index will point to a group to which it belongs.  Each group contains all the indices which can swap with each other.

Once the groups are formed, I reorganize them so that each group points back to it's component indices.  The characters from the this indices in the string are grabbed and sorted.  The indices are then sorted, and the characters are put back into the positions in the string sorted.

```
class Solution 
{
        /**
        * @param String $s
        * @param Integer[][] $pairs
        * @return String
        */
        function smallestStringWithSwaps($str, $pairs) 
        {
//echo "---\
";
                /* Set up groups for union find. */
                $groups = [];
                foreach($pairs as $pair)
                {
                        $groups[$pair[0]] = $pair[0];
                        $groups[$pair[1]] = $pair[1];
                }
                
                /* UF functions. */
                $find = function(int $node) use(&$groups, &$find)
                {
                        $visited = [];
                        while($groups[$node] != $node)
                        {
                                $visited[] = $node;
                                $node = $groups[$node];
                        }
                        foreach($visited as $v)
                                $groups[$v] = $node;
                        
                        return $node;
                };
                $merge = function(int $g1, int $g2) use(&$groups)       // g1 merges into g2
                {
                        $groups[$g1] = $g2;
                };
                
                /* Combine each set of connected groups into a single group via union find. */
                foreach($pairs as $pair)
                {
                        $g1 = $find($groups[$pair[0]]);
                        $g2 = $find($groups[$pair[1]]);
                        if($g1 != $g2)
                                $merge($g1, $g2);
                }

                /* Map each group to the indices it contains. */
                foreach($groups as $k=>$v)
                        $find($k);
                
                $finalGroups = [];
                foreach($groups as $k=>$v)
                {
                        if(!isset($finalGroups[$v]))
                                $finalGroups[$v] = [];
                        $finalGroups[$v][] = $k;
                }

                /* Sort each group and sort the characters in the corresponding string indices. */
                $keys = array_keys($finalGroups);
                foreach($keys as $key)
                {
                        /* Sort the characters from the string matching the indices in this group. */
                        sort($finalGroups[$key]);
                        $s = [];
                        foreach($finalGroups[$key] as $ind)
                                $s[] = $str[$ind];
                        sort($s, SORT_STRING);
                        
                        /* Write the sorted characaters back into the string. */
                        for($j=0; $j<count($finalGroups[$key]); $j++)
                                $str[$finalGroups[$key][$j]] = $s[$j];
                }
                
                return $str;
        }
}
```
