# Proxy sol explained

**Author:** qkudev
**Votes:** 4
**Link:** [https://leetcode.com/problems/immutability-helper/solutions/3658800/](https://leetcode.com/problems/immutability-helper/solutions/3658800/)

---

# Intuition
So we need to create a helper that assumes as to mutate object without actual mutations and then returns a new one object.


# Approach
If we can not mutate original object, let us just save mutations of the original object after mutator's call and then assemble new object from original and saved mutations.

First of all, we have our `ImmutableHelper` class. It saves given object to it's private prop and also it has `produce` method that accepts callback (`mutator`) and returns newly created object.

`produce` is about these steps:

1. create draft
2. apply `mutator`
3. assemble new object

```
public produce(mutator: (obj: any) => void): any {
    const draft = this.createDraft(this.obj);
    mutator(draft);

    return this.assemble(draft);
}
```

Our `draft` is a `Proxy` object that will save our mutations to `Map`, where `keys` are obj's props and values are the new values after mutations. Also, for the things like these to work:
```
const obj = {
    a: {
        b: 1
    }
}

produce(o => {
    o.a.b = 2
})
```

we will store `nested` \u2013 map for nested objects, so our proxy draft will return another proxy for `mutator` and it will be possible to mutate nested objects.

Last one thing is `assemble` method \u2013 the method for creating a new objects. Actually, all we need is just to create shallow copy of our original object and then apply mutations from `mutations` map and assemble all nested drafts. That's it.


# Code
```
type InputObj = Record<any, any> | Array<any>;
type Mutations = Map<string | symbol | number, unknown>;
type Nested = Map<string | symbol | number, any>;
type DraftState = [Nested, Mutations, InputObj];

class ImmutableHelper {
  constructor(private readonly obj: InputObj) {}

  public produce(mutator: (obj: any) => void): any {
    const draft = this.createDraft(this.obj);
    mutator(draft);

    return this.assemble(draft);
  }

  private draftStates = new WeakMap<object, DraftState>();

  private createDraft = (obj: any): InputObj => {
    // Mutated values
    const mutations: Mutations = new Map();
    // Nested drafts for nested objects
    const nested = new Map<string | symbol | number, any>();
    const draft = new Proxy(obj, {
      set: (_, p, v) => {
        mutations.set(p, v);
        if (mutations.get(p) === obj[p]) {
          // remove useless mutation
          mutations.delete(p);
        }

        return true;
      },
      get: (_, p) => {
        if (typeof obj[p] === 'object' && obj[p]) {
          if (!nested.has(p)) {
            nested.set(p, this.createDraft(obj[p]));
          }
          return nested.get(p)!;
        }
        if (mutations.has(p)) {
          return mutations.get(p);
        }

        return obj[p];
      },
    });
    this.draftStates.set(draft, [nested, mutations, obj]);

    return draft;
  };

  // assembles object from initial one, mutations and nested drafts
  private assemble = (proxy: any) => {
    const isProxy = this.draftStates.has(proxy);
    if (!isProxy) {
      return proxy;
    }

    const [nested, mutations, original] = this.draftStates.get(proxy)!;
    // No modifications, return initial object
    if (!mutations.size && !nested.size) {
      return original;
    }

    const next: any = Array.isArray(original)
      ? [...original]
      : Object.assign({}, original);
    // assemble every nested draft
    nested.forEach((v, k) => {
      next[k] = this.assemble(v);
    });
    // set mutated keys
    mutations.forEach((v, k) => {
      next[k] = v;
    });

    return next;
  };
}

```

Pls upvote if the sol was helpful