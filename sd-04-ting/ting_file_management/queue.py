class Queue:
    FIRST_ELEMENT = 0

    def __init__(self):
        self._data = list()

    def __len__(self):
        return len(self._data)

    def enqueue(self, value):
        if value not in self._data:
            self._data.append(value)

    def dequeue(self):
        return self._data.pop(self.FIRST_ELEMENT)

    def search(self, index):
        if index < 0:
            raise IndexError
        return self._data[index]
