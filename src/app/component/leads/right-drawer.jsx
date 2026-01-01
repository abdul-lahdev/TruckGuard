import { useState } from "react"

import { Button } from "@/components/ui/button"
export default function RightDrawer({ draweropen, setDrawerOpen }) {

    return (
        <>


            <Drawer
                direction="right"
                open={draweropen}
                onOpenChange={setDrawerOpen}
            >
                <DrawerContent className="h-full w-[400px] right-0 left-auto">
                    <DrawerHeader>
                        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                        <DrawerDescription>
                            This action cannot be undone.
                        </DrawerDescription>
                    </DrawerHeader>

                    <DrawerFooter>
                        <Button onClick={() => setDrawerOpen(false)}>Submit</Button>
                        <Button
                            variant="outline"
                            onClick={() => setDrawerOpen(false)}
                        >
                            Cancel
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
