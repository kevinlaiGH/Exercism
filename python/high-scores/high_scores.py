class HighScores(object):
    def __init__(self, scores):
        self.scores = scores

    def latest(self):
        return self.scores[-1]

    def personal_best(self):
        return max(self.scores)

    def personal_top(self):
        return sorted(self.scores, reverse=True)[0:3]

    def report(self):
        if self.latest() == self.personal_best():
            return "Your latest score was {:d}. That's your personal best!".format(self.latest())

        else:
            diff = self.personal_best() - self.latest()
            return "Your latest score was {:d}. That's {:d} short of your personal best!".format(self.latest(), diff)
