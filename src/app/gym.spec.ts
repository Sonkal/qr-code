import {Gym} from './gym';

describe('Gym', () => {
  it('should create an instance', () => {
    expect(new Gym()).toBeTruthy();
  });
  it('we have 3 gyms', () => {
    expect(Gym.GYMS.length).toBe(3);
  });
});
