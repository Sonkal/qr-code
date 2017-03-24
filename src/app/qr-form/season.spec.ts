import {Season} from './season';

describe('Season', () => {
  it('should create an instance', () => {
    expect(new Season()).toBeTruthy();
  });
  it('we have 3 seasons', () => {
    expect(Season.SEASONS.length).toBe(3);
  });
  it('current season Jan => 1', () => {
    expect(Season.CURRENT_SEASON(new Date("2017/01/01"))).toBe(Season.SEASON_1);
  });
  it('current season Dec => 1', () => {
    expect(Season.CURRENT_SEASON(new Date("2017/12/01"))).toBe(Season.SEASON_1);
  });
  it('current season Feb => 2', () => {
    expect(Season.CURRENT_SEASON(new Date("2017/02/02"))).toBe(Season.SEASON_2);
  });
  it('current season Mar => 2', () => {
    expect(Season.CURRENT_SEASON(new Date("2017/03/03"))).toBe(Season.SEASON_2);
  });
  it('current season Apr => 2', () => {
    expect(Season.CURRENT_SEASON(new Date("2017/03/03"))).toBe(Season.SEASON_2);
  });
  it('current season Aug => 2', () => {
    expect(Season.CURRENT_SEASON(new Date("2017/08/08"))).toBe(Season.SEASON_3);
  });
  it('current season Sep => 3', () => {
    expect(Season.CURRENT_SEASON(new Date("2017/09/09"))).toBe(Season.SEASON_3);
  });
});
