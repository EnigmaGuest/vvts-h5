import { computed } from 'vue';
import { useLoading } from '../common';
import useCountDown from './use-count-down';

export default function useSmsCode() {
  const { loading, startLoading, endLoading } = useLoading();
  const { counts, start, isCounting } = useCountDown(60);

  const initLabel = '获取验证码';
  const countingLabel = (second: number) => `${second}秒后重新获取`;
  const label = computed(() => {
    let text = initLabel;
    if (loading.value) {
      text = '';
    }
    if (isCounting.value) {
      text = countingLabel(counts.value);
    }
    return text;
  });

  /** 判断手机号码格式是否正确 */
  function isPhoneValid(phone: string) {
    let valid = true;

    return valid;
  }

  /**
   * 获取短信验证码
   * @param phone - 手机号
   */
  async function getSmsCode(phone: string) {
    const valid = isPhoneValid(phone);
    if (!valid || loading.value) return;

    startLoading();
    setTimeout(() => {
      start();
    }, 1000);
    endLoading();
  }

  return {
    label,
    start,
    isCounting,
    getSmsCode,
    loading
  };
}
