import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NavSidebar } from "@/components/navigation/nav-sidebar";
import ChannelSidebar from "@/components/server/channel-sidebar";

export const MobileToggle = ({ serverId }: { serverId: string }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 flex gap-0">
        <div className="w-[72px]">
          <NavSidebar />
        </div>
        <ChannelSidebar serverId={serverId} />
      </SheetContent>
    </Sheet>
  );
};
