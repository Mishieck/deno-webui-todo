/* @jsxImportSource https://esm.sh/preact@10.15.1 */

export type IconButtonProps = {
  icon: string;
};

export const IconButton = ({ icon }: IconButtonProps) => {
  return (
    <button
      type="button"
      class="
        material-symbols-outlined md-24
        btn
        relative 
        !inline-flex 
        !items-center 
        justify-center 
        w-12 
        h-12 
        gap-x-2 
        py-2.5 
        px-6 
        rounded-[6.25rem] 
        hover:shadow-md 
        tracking-[.00714em] 
        bg-primary-600 
        text-white 
        dark:bg-primary-200 
        dark:text-primary-800
      "
    >
      {icon}
    </button>
  );
};
