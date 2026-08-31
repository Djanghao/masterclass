# Kotlin | Rust

**Author:** SamoylenkoDmitry
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/solutions/5965972/](https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/solutions/5965972/)

---

![1.webp](./images/0.webp)

https://youtu.be/-kPhrQHOPB8

#### Join me on Telegram

https://t.me/leetcode_daily_unstoppable/779

#### Problem TLDR

Remove empty subfolders #medium #trie #sort

#### Intuition

One way to do this in O(n) is to add everything into a Trie, mark the `ends`, then scan again and exclude path with more than one `end`.

Another way, is to sort paths, then naturally, every previous path will be parent of the next if it is a substring of it.

#### Approach

* Trie with keys of a `string` is faster in my tests then Trie with keys of individual `chars` (something with string optimizations)
* the fastest solution for this problem test cases is O(N(logN)), given the bigger constant of the Trie O(N) solution

#### Complexity

- Time complexity:
$$O(n)$$ for Trie, O(nlog(n)) for sort solution

- Space complexity:
$$O(n)$$

#### Code

```kotlin []

    fun removeSubfolders(folder: Array<String>) = buildList<String> {
        folder.sort()
        for (f in folder) if (size < 1 || !f.startsWith(last() + "/")) add(f)
    }

```
```rust []

    pub fn remove_subfolders(mut folder: Vec<String>) -> Vec<String> {
        #[derive(Default)] struct Fs(u8, HashMap<String, Fs>);
        let (mut fs, mut res) = (Fs::default(), vec![]);
        for _ in 0..2 { for path in &folder {
            let mut r = &mut fs; let mut count = 0;
            for name in path.split('/').skip(1) {
                r = r.1.entry(name.into()).or_default();
                count += r.0
            }
            if r.0 == 1 && count == 1 { res.push(path.clone()) }
            r.0 = 1
        }}; res
    }

```
```c++ []

    vector<string> removeSubfolders(vector<string>& folder) {
        sort(begin(folder), end(folder)); vector<string> res;
        for (auto& f: folder) 
            if (!size(res) || f.find(res.back() + "/"))
                res.push_back(f);
        return res;
    }

```