# C# using LinkedList<T>

**Author:** kpol
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-front-middle-back-queue/solutions/5007106/](https://leetcode.com/problems/design-front-middle-back-queue/solutions/5007106/)

---

# Code
```
public class FrontMiddleBackQueue
{
    private readonly LinkedList<int> _l = [];
    private LinkedListNode<int> _middle;

    public void PushFront(int val)
    {
        _l.AddFirst(val);

        if (_middle is null)
        {
            _middle = _l.First;
        }
        else if (int.IsEvenInteger(_l.Count))
        {
            _middle = _middle.Previous;
        }
    }

    public void PushMiddle(int val)
    {
        if (_middle is not null)
        {
            LinkedListNode<int> newMiddle = new(val);

            if (int.IsOddInteger(_l.Count))
            {
                _l.AddBefore(_middle, newMiddle);
            }
            else
            {
                _l.AddAfter(_middle, newMiddle);
            }

            _middle = newMiddle;
        }
        else
        {
            _l.AddFirst(val);
            _middle = _l.First;
        }
    }

    public void PushBack(int val)
    {
        _l.AddLast(val);

        if (_middle is null)
        {
            _middle = _l.Last;
        }
        else if (int.IsOddInteger(_l.Count))
        {
            _middle = _middle.Next;
        }
    }

    public int PopFront()
    {
        if (_l.Count == 0) return -1;

        var result = _l.First.Value;
        
        if (_l.Count == 1) _middle = null;
        else if (int.IsEvenInteger(_l.Count)) _middle = _middle.Next;

        _l.RemoveFirst();

        return result;
    }

    public int PopMiddle()
    {
        if (_l.Count == 0) return -1;

        var result = _middle.Value;

        if (_l.Count == 1)
        {
            _l.RemoveFirst();
            _middle = null;
        }
        else
        {
            var newMiddle = int.IsOddInteger(_l.Count) ? _middle.Previous : _middle.Next;

            _l.Remove(_middle);
            _middle = newMiddle;
        }

        return result;
    }

    public int PopBack()
    {
        if (_l.Count == 0) return -1;

        var result = _l.Last.Value;
        
        if (_l.Count == 1) _middle = null;
        else if (int.IsOddInteger(_l.Count)) _middle = _middle.Previous;

        _l.RemoveLast();

        return result;
    }
}
```