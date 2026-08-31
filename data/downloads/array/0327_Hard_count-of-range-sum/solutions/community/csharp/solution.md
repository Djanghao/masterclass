# C# RB Tree

**Author:** olegbelousov77
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-of-range-sum/solutions/1613119/](https://leetcode.com/problems/count-of-range-sum/solutions/1613119/)

---

```cs
public class Solution {

    // Solution
	
    public int CountRangeSum(int[] nums, int lower, int upper) {
        int count = 0; long sum = 0;
        var dic = new RBTreeSpecial(); dic.Add(0);
        for(var i = 0; i < nums.Length; i++) {
            sum+= nums[i];
            count += dic.GreaterThanCount(sum - upper - 1) - dic.GreaterThanCount(sum - lower);
            dic.Add(sum);
        }
        return count;
    }
    
    
	// RB Tree
	
    public class RBTreeBase<TKey,TNode>
        where TNode : RBTreeBase<TKey,TNode>.NodeBase
    {
        private readonly IComparer<TKey> _comparer;

        private TNode _root;

        private Func<TNode,TNode,TNode> _duplicate;

        public RBTreeBase()
            : this(Comparer<TKey>.Default)
        {

        }

        public RBTreeBase(IComparer<TKey> comparer)
            : this (comparer, (e,a) => throw new ArgumentOutOfRangeException($"Duplicate key: '{a.Key}'."))
        {
            
        }        

        public RBTreeBase(IComparer<TKey> comparer, Func<TNode,TNode,TNode> duplicate)
        {
            _comparer = comparer;
            _duplicate = duplicate;
        }        

        public int Count => _root?.Count ?? 0;

        public RBTreeBase<TKey,TNode> Add(TNode node)
        {
            var stack = new Stack<TNode>();

            var next = _root;
            while(next != null)
            {
                stack.Push(next);
                switch(Math.Sign(_comparer.Compare(node.Key, next.Key)))
                {
                    case -1:
                        next = next.LeftLink;
                        break;
                    case 0:
                        next = null;
                        break;
                    case 1:
                        next = next.RightLink;
                        break;
                }
            }

            if (!stack.TryPeek(out TNode peeked))
            {
                _root = node;
                _root.IsRed = false;
                _root.Count = _root.SelfCount();
                return this;
            }

            switch(Math.Sign(_comparer.Compare(node.Key, peeked.Key)))
            {
                case -1:
                    peeked.LeftLink = node;
                    break;
                case 0:
                    node = _duplicate.Invoke(peeked, node);
                    break;
                case 1:
                    peeked.RightLink = node;
                    break;
            }

            TNode last = node;

            while (stack.TryPop(out TNode prev))
            {
                if (prev.LeftLink?.IsRed == true && prev.RightLink?.IsRed == true)
                {
                    prev.LeftLink.IsRed = prev.RightLink.IsRed = false;
                    prev.IsRed = true;
                }

                if (last.IsRed && prev.RightLink == last)
                {
                    var temp = last.LeftLink;

                    if (stack.TryPeek(out peeked))
                        if (peeked.LeftLink == prev)
                            peeked.LeftLink = last;
                        else
                            peeked.RightLink = last;
                    else
                        _root = last;

                    last.LeftLink = prev;
                    last.IsRed = prev.IsRed;
                    prev.RightLink = temp;
                    prev.IsRed = true;

                    temp = last;
                    last = prev;
                    prev = temp;
                }

                if (last.IsRed && prev.LeftLink == last && last.LeftLink?.IsRed == true) 
                {
                    var temp = last.RightLink;

                    if (stack.TryPeek(out peeked))
                        if (peeked.LeftLink == prev)
                            peeked.LeftLink = last;
                        else
                            peeked.RightLink = last;
                    else
                        _root = last;

                    last.RightLink = prev;
                    last.IsRed = true;
                    prev.LeftLink = temp;
                    prev.IsRed = false;

                    last.LeftLink.IsRed = false;

                    temp = last;
                    last = prev;
                    prev = temp;
                }

                if (prev.LeftLink?.IsRed == true && prev.RightLink?.IsRed == true)
                {
                    prev.LeftLink.IsRed = prev.RightLink.IsRed = false;
                    prev.IsRed = true;
                }

                last.Count = last.SelfCount() + (last.LeftLink?.Count ?? 0) + (last.RightLink?.Count ?? 0);

                last = prev;
            }

            last.Count = last.SelfCount() + (last.LeftLink?.Count ?? 0) + (last.RightLink?.Count ?? 0);

            _root.IsRed = false;

            return this;
        }

        public TNode Search(TKey key)
        {
            var current = _root;
            while (current != null)
            {
                switch(Math.Sign(_comparer.Compare(key, current.Key)))
                {
                    case 0:
                        return current;
                    case -1:
                        current = current.LeftLink;
                        break;
                    case 1:
                        current = current.RightLink;
                        break;
                }
            }
            return null;
        }

        public IEnumerable<TNode> SearchPath(TKey key)
        {
            var current = _root;
            while (current != null)
            {
                yield return current;
                switch(Math.Sign(_comparer.Compare(key, current.Key)))
                {
                    case 0:
                        yield break;
                    case -1:
                        current = current.LeftLink;
                        break;
                    case 1:
                        current = current.RightLink;
                        break;
                }
            }
        }

        public IEnumerable<TNode> Enumerate()
        {
            return Enumerate(_root);
        }

        #region Private

        private IEnumerable<TNode> Enumerate(TNode node)
        {
            if (node == null)
                yield break;
            
            foreach(var kvp in Enumerate(node.LeftLink))
                yield return kvp;
            
            yield return node;

            foreach(var kvp in Enumerate(node.RightLink))
                yield return kvp;
        }

        #endregion


        public class NodeBase
        {
            public NodeBase(TKey key)
            {
                Key = key;
            }

            public TKey Key { get; }

            public int Count { get; set; } = 1;

            public bool IsRed { get; set; } = true;

            public TNode LeftLink { get; set; }

            public TNode RightLink { get; set; }

            public virtual int SelfCount() => 1;
        }
    }    
    
    public class RBTreeSpecial : IEnumerable<KeyValuePair<long,int>>
    {
        private readonly RBTreeBase<long,Node> _tree = 
            new RBTreeBase<long,Node>(Comparer<long>.Default, (e,a) => { e.KeysCount += 1;  return e; });

        public int Count => _tree.Count;

        public RBTreeSpecial Add(long key)
        {
            _tree.Add(new Node(key));
            return this;
        }

        public int GreaterThanCount(long value)
        {
            var count = 0;

            foreach(var node in _tree.SearchPath(value))
            {
                if (node.Key > value)
                    count += node.SelfCount();
                if (node.Key >= value)
                    count += node.RightLink?.Count ?? 0;
            }

            return count;
        }

        #region IEnumerable<KeyValuePair<long,TValue>>

        IEnumerator<KeyValuePair<long, int>> IEnumerable<KeyValuePair<long, int>>.GetEnumerator() =>
            Enumerate().GetEnumerator();

        IEnumerator IEnumerable.GetEnumerator() =>
            Enumerate().GetEnumerator();

        #endregion

        private IEnumerable<KeyValuePair<long,int>> Enumerate()
        {
            foreach(var node in _tree.Enumerate())
                yield return new KeyValuePair<long, int>(node.Key, node.KeysCount);
        }

        private class Node : RBTreeBase<long,Node>.NodeBase
        {
            public int KeysCount { get; set; } = 1;

            public Node(long key) : base(key)
            {
                
            }

            public override int SelfCount() => KeysCount;
        }        
    }
   
}
```