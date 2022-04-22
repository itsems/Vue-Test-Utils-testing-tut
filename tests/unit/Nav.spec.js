import { mount } from "@vue/test-utils";
import Nav from "@/components/Nav.vue";

describe("Nav.vue", () => {
  it("render profile link", () => {
    const wrapper = mount(Nav,{
      data() {
        return {
          isLoggedIn: true
        }
      }
    });
    const profileLink = wrapper.get('#profile')
    expect(profileLink.text()).toEqual('Profile')
  });

  it('should not render profile link', () => {
    const wrapper = mount(Nav,{
      data() {
        return {
          isLoggedIn: false
        }
      }
    });
    //? get 可以拿來找 DOM 物件，但有時候不太合適，因為 get 會當作該對象「一定」存在，如果找不到對象，就會 throw err，
    //? 如果是條件式渲染就無法測試，例如條件符合就不 render 此 dom，get 就會直接拋錯
    //? 所以條件式渲染的測試，應該用 find
    // const profileLink  = wrapper.get('#profile')
    
    const profileLink  = wrapper.find('#profile');
    expect(profileLink.exists()).toBe(false);
  })

});
