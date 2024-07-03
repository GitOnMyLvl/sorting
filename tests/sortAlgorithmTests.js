function runSortTests(SortClass, sortName) {
  describe(`${sortName}`, () => {
    let displayMock;
    let array;
    let sortInstance;

    beforeEach(() => {
      displayMock = jest.fn();
      array = [7, 9, 3, 5, 1, 6];
      sortInstance = new SortClass(displayMock, array, 0);
    });

    test(`should sort array with ${sortName}`, async () => {
      await sortInstance.sort();
      expect(sortInstance.getArray()).toEqual([1, 3, 5, 6, 7, 9]);
      expect(displayMock).toHaveBeenCalled();
    });

    if (SortClass.prototype.iterativeSort) {
      test(`should sort array iteratively with ${sortName}`, async () => {
        await sortInstance.iterativeSort();
        expect(sortInstance.getArray()).toEqual([1, 3, 5, 6, 7, 9]);
        expect(displayMock).toHaveBeenCalled();
      });
    }

    if (SortClass.prototype.recursiveSort) {
      test(`should sort array recursively with ${sortName}`, async () => {
        await sortInstance.recursiveSort();
        expect(sortInstance.getArray()).toEqual([1, 3, 5, 6, 7, 9]);
        expect(displayMock).toHaveBeenCalled();
      });
    }
  });
}

export default runSortTests;