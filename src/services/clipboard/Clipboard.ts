'use client';

export const copyToClipboard = async (text: string) => {
  if (!navigator) {
    alert('지원하지 않는 브라우저입니다.');
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
  } catch (e) {
    alert(`${e}`);
  }
};
