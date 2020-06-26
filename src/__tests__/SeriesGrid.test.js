import react from 'react'
import { mount } from 'enzyme'
import SeriesGrid from '../components/SeriesGrid'

describe("SeriesGrid component", () => {
  const wrapper = mount(<SeriesGrid />);
  it("fetches the list of series for Viaplay API", () => {
    expect(fetchSeries).toHaveBeenCalled()
    expect(seriesList).toHaveLength(10)
  })
})