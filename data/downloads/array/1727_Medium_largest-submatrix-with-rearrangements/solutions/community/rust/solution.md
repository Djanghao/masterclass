# rust 320ms

**Author:** elitecoder666
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-submatrix-with-rearrangements/solutions/4334678/](https://leetcode.com/problems/largest-submatrix-with-rearrangements/solutions/4334678/)

---

# Complexity
$$???$$

# Code
```
#[derive(Copy, Clone, Debug)]
struct Block
{
    begin: usize,
    end: usize
}

use std::cmp::Ordering;

impl Solution
{
    fn init_blocks(matrix: &Vec<Vec<i32>>) -> Vec<Block>
    {
        let mut result = Vec::new();

        for c in 0..matrix[0].len()
        {
            let mut cur_block = Block{begin: 0, end: 0};

            for r in 0..matrix.len()
            {
                if matrix[r][c] == 1
                {
                    if cur_block.end - cur_block.begin > 0
                    {
                        cur_block.end += 1;
                    }
                    else
                    {
                        cur_block.begin = r;
                        cur_block.end = r + 1;
                    }
                }
                else
                {
                    if cur_block.end - cur_block.begin > 0
                    {
                        result.push(cur_block);
                    }

                    cur_block.begin = 0;
                    cur_block.end = 0;
                }
            }

            if cur_block.end - cur_block.begin > 0
            {
                result.push(cur_block)
            }
        }

        result.sort_unstable_by(|&a, &b|
        {
            let ha = a.end - a.begin;
            let hb = b.end - b.begin;
            
            if ha > hb { return Ordering::Greater; }
            if ha < hb { return Ordering::Less; }
            
            if a.begin < b.begin { return Ordering::Less; }
            if a.begin > b.begin { return Ordering::Greater; }

            return Ordering::Equal;
        });

        result.reverse();

        return result;
    }

    fn init_pseudo_blocks(blocks: &Vec<Block>) -> Vec<Block>
    {
        let mut begins = vec![];
        let mut ends = vec![];
        
        for b in blocks
        {
            begins.push(b.begin);
            ends.push(b.end);
        }

        begins.sort_unstable();
        begins.dedup();

        ends.sort_unstable();
        ends.dedup();

        let mut result = vec![];

        for &b in begins.iter()
        {
            let mut max_end = 0;
            for &block in blocks
            {
                if b == block.begin && block.end > max_end
                {
                    max_end = block.end;
                }
            }

            for &e in ends.iter()
            {
                if e > max_end
                {
                    break;
                }

                if e > b
                {
                    result.push(Block{begin: b, end: e});
                }
            }
        }

        result.sort_unstable_by(|&a, &b|
        {
            let ha = a.end - a.begin;
            let hb = b.end - b.begin;
            
            if ha > hb { return Ordering::Greater; }
            if ha < hb { return Ordering::Less; }
            
            if a.begin < b.begin { return Ordering::Less; }
            if a.begin > b.begin { return Ordering::Greater; }

            return Ordering::Equal;
        });

        return result;
    }

    pub fn largest_submatrix(matrix: Vec<Vec<i32>>) -> i32
    {
        let mut ans = 0;
        let mut blocks = Solution::init_blocks(&matrix);
        let mut rm_blocks = Vec::new();

        let pseudo_blocks = Solution::init_pseudo_blocks(&blocks);

        for pseudo_block in pseudo_blocks
        {
            if blocks.len() == 0
            {
                break;
            }

            let mut count = 0;

            for i in (0..blocks.len()).rev()
            {
                let this_block = blocks[i];

                if this_block.begin <= pseudo_block.begin && this_block.end >= pseudo_block.end
                {
                    count += 1;

                    if this_block.begin == pseudo_block.begin && this_block.end == pseudo_block.end
                    {
                        rm_blocks.push(i);
                    }
                }
            }

            ans = std::cmp::max(ans, ((pseudo_block.end - pseudo_block.begin) * count) as i32);

            for i in &rm_blocks
            {
                blocks.swap_remove(*i);
            }

            rm_blocks.clear();
        }

        return ans;
    }
}
```