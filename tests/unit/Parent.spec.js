import { shallowMount } from "@vue/test-utils";
import Parent from "@/components/Parent.vue";

describe("Parent.vue", () => {
  it("props.msg", () => {
    const wrapper = shallowMount(Parent);
    expect(wrapper.text()).toContain("Child")
  });
});
