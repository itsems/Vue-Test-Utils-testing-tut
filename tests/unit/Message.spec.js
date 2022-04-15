import { mount } from "@vue/test-utils";
import Message from "@/components/Message.vue";

describe("Message.vue", () => {
  it("props.msg", () => {
    const wrapper = mount(Message, {
      props: {
        msg: "asdf",
      },
    });
    expect(wrapper.text()).toContain("sdf")
  });
});
