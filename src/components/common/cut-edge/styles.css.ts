import { colors } from "@/utils/colors";
import { recipe } from "@vanilla-extract/recipes";

export const cutEdgeStyles = {
  container: recipe({
    base: {
      WebkitClipPath:
        "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",

      position: "relative",
    },
    variants: {
      filled: {
        true: {
          backgroundColor: colors.primary,
        },

        false: {
          backgroundColor: colors.primary,
          zIndex: 1,
          width: "calc(100% + 4px)",
          height: "calc(100% + 4px)",
          ":after": {
            WebkitClipPath:
              "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",
            backgroundColor: colors.black,
            position: "absolute",
            content: "",
            top: 1,
            bottom: 0,
            right: 0,
            width: "calc(100% - 2px)",
            height: "calc(100% - 2px)",
            left: 1,
            zIndex: -1,
          },
        },
      },
    },
  }),
};
