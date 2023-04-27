interface SimpleCache<TValue> {
  updatedAt: number;
  value?: TValue;
}

const getCachedValue = async <TValue>(
  cache: SimpleCache<TValue>,
  timeToLiveMs: number,
  newValue: () => Promise<TValue>
) => {
  const stale = cache.updatedAt + timeToLiveMs * 1000 < Date.now();
  if (stale) {
    try {
      cache.value = await newValue();
      cache.updatedAt = Date.now();
    } catch (e) {
      console.error(e);
    }
  }

  return cache.value!;
};

export { getCachedValue, type SimpleCache };
